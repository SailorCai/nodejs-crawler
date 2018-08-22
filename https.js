var https = require('https');
var fs = require('fs')

var options = {
	key: fs.readFileSync('ssh_key.pem'),	//同步读取私钥文件
	cert: fs.readFileSync('ssh_cert.pem')	//读取证书文件
	//有了以上两个参数就能创建https的服务器了
}

https.createServer(options, function(req, res){
	res.writeHead(200)
	res.end('hello https')
}).listen(8090);
//除此以外，https的get和request使用方法和http一致