var fs = require('fs')

var readStream = fs.createReadStream('1.mp4')
var writeStream = fs.createWriteStream('1-stream.mp4')

readStream.on('data', function(chunk){
	if(writeStream.write(chunk) === false){
		console.log('still cached')
		readStream.pause();
	}
})

readStream.on('end', function(){
	writeStream.end()
})

//drain事件表示数据已经写入到目标了
writeStream.on('drain', function(){
	console.log('data drains')

	readStream.resume()
})