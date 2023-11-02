// import functions from helper_functiones.js

const {getIp, writeToFile, readAFile, deleteAFile, makeCowSay } = require('./helper_functiones');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case 'gip':
    getIp(file);
    break;

  case 'wf':
    writeToFile(file, content);
    break;

  case 'rf':
    readAFile(file)
    break;

  case 'df':
    deleteAFile(file)
    break;

  case 'mcw':
    makeCowSay(file);
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}

