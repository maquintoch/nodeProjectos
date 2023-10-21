const os = require ('node:os');

console.log('Information about the system');
console.log('___________________');

console.log('Operative system:', os.platform());
console.log('Operative system version:', os.version());
console.log('CPU architecture:', os.arch());
console.log('HomeDir:', os.homedir());
console.log('Hostname:', os.hostname());
console.log('CPU', os.cpus());
console.log('Memory', os.freemem() /1024 / 1024);
console.log('Os', os.networkInterfaces());


