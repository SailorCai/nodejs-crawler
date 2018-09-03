var net = require("net");

//创建服务器
var server = net.createServer(function(connection){
	console.log('client connected');
	connection.on('end', function(){
		console.log('客户端连接关闭');
	});
	connection.on('error', function(error){
		console.log(error);
	});
	connection.write('Hello World!\r\n');

	connection.pipe(connection);
});

server.listen(8080, function(){
	console.log('server is listening');
});