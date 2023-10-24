const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

console.log('This is all the information required ...');
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
)
