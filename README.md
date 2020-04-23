# Quick-Github-Downloader
Downloads the files from a github repository (and you can specify which directory to grab) and puts them in a specified output folder - all in js.

All it does:
~~~~
const githubDownloader = require('quick-github-downloader');

githubDownloader(repository, githubSubdir, outputDir, callback);
~~~~

This will download the repository, select the sub dir you want, copy it to the output directory and delete the other unneeded stuff.

For example,
~~~~
githubDownloader('Cornchipss/Quick-Github-Downloader', '/sample', './test-output', () =>
{
    console.log('Shazam!');
    // do stuff with the downloaded files located in ./test-output
});
~~~~