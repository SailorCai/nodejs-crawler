//OS模块提供一些基本的系统操作函数
var os = require('os');

//cpu的字节序
console.log('endianness：' + os.endianness());

//操作系统名
console.log('type：' + os.type());

//操作系统名
console.log('platform: ' + os.platform());

//系统内存总量
console.log('total memory : ' + os.totalmem() + 'bytes.');

//操作系统空闲内存量
console.log('free memory : ' + os.freemem() + 'bytes.');