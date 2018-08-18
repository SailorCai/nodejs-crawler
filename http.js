var http = require('http');

http
	.createServer(function(req, res) {
		//通过response来返回一个响应头
		//第一个参数是状态码，第二个参数是对象字面量
		res.writeHead(200, {'Content-Type': 'text/plain'});
		//写入相应的主体
		res.write('Hello Nodejs');
		//结束掉响应
		res.end();
	})
	.listen(2018);

console.log("server run in localhost:2018");