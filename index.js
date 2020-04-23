const download = require('download-github-repo');
const fs = require('fs');
const ncp = require('ncp').ncp;
const rimraf = require('rimraf');

const TEMP_FOLDER = 'github-downloader-temp/';

/**
 * Downloads the files in a github repository directory and puts them into a specified output directory
 * @param {string} repository The github repository to clone (ex: Cornchipss/Quick-Github-Downloader)
 * @param {string} githubSubdir A subdirectory of this repository to clone (ex: '/' for the root directory, '/download/files/here' to only copy files in that directory)
 * @param {string} outputDir The directory to put the downloaded files into
 */
module.exports = function(repository, githubSubdir, outputDir, callback)
{
    download(repository, TEMP_FOLDER, (err) =>
    {
        if(err)
            throw err;

        rimraf(outputDir, (err) =>
        {
            if(err)
                throw err;

            mkdir(outputDir);

            ncp(TEMP_FOLDER + githubSubdir, outputDir, err =>
            {
                if(err)
                    throw err;
                rimraf.sync(TEMP_FOLDER);

                if(callback)
                    callback();
            });
        });
    });
}

/**
 * Makes a directory if it doesnt exist
 * @param {string} dir The directory to make if not exisiting
 */
function mkdir(dir)
{
    let split = dir.split('/');

    let dirToCheck = '';

    for(let i = 0; i < dir.length; i++)
    {
        dirToCheck += split[i] + '/';

        if(!fs.existsSync(dirToCheck))
        {
            fs.mkdirSync(dirToCheck);
        }
    }
}