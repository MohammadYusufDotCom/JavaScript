const os = require('os')

console.log(os.totalmem()/(1024*1024*1024))
console.log(os.arch())
console.log(os.availableParallelism())
console.log( os.cpus())
console.log(os.endianness())
console.log(os.getPriority())
console.log("homedir: "+os.homedir())
console.log("hostname: "+os.hostname())
console.log(os.loadavg())
console.log(os.networkInterfaces())
console.log("release: "+os.release())
console.log(os.setPriority())
console.log("type: "+os.type())
console.log("userInfo: "+os.userInfo())
console.log("version: "+os.version())
console.log(os.userInfo())
console.log("machine: "+os.machine())
console.log("uptime: "+os.uptime())
console.log("tmpdir: "+os.tmpdir())