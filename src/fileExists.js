var fs = require('fs');/** * Checks if given file exists synchronously. * * @param {string} filePath (eg. /path/to/file.thing) * @returns {boolean} */module.exports = function (filePath) {    try {        return fs.statSync(filePath).isFile();    }    catch (err) {        return false;    }};