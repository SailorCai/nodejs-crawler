var http = require('http')
var fs = require('fs')
//request模块需要安装
var request = require('request')

http
	.createServer(function(req, res){
		//传统方式
		/*fs.readFile('../timg.jpg', function(err, data){
			if(err) {
				res.end('file not exist!')
			}else{
				res.writeHeader(200, {'Context-Type': 'text/html'})
				res.end(data)
			}
		})*/
		//通过pipe更优雅的读取文件
		fs.createReadStream('../timg.jpg').pipe(res)
		//从线上实时的爬取一个文件，不保存到本地，直接返回给浏览器
		//request('https://www.imooc.com/static/img/index/logo.png')
		//	.pipe(res)
	})
	.listen(8090)