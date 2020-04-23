const gh = require('./index');
const fs = require('fs');

gh('Cornchipss/Quick-Github-Downloader', '/sample', 'test-output', () =>
{
    console.log(fs.existsSync('./test-output/Hello World.txt') ? 'Success.' : 'Fail');
});