// const fs = require('fs');
// const PNG = require('pngjs').PNG;

const pwdTestDir = '/Users/actmember/Documents/dev/E2E_Testing_with_Puppeteer_Final/src/test/screenshots';
const pwdOriginalDir = '/Users/actmember/Documents/dev/E2E_Testing_with_Puppeteer_Final/src/test/original';

const img1 = fs.createReadStream(`${pwdTestDir}/${fileName}.png`).pipe(new PNG()).on('parsed', doneReading);
const img2 = fs.createReadStream(`${pwdOriginalDir}/${fileName}.png`).pipe(new PNG()).on('parsed', doneReading);
