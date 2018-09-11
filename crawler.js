var http = require('http');
var url = 'http://www.imooc.com/learn/348';

//通过http.get()方法来发送请求，获取数据
http.get(url, function(res){
	var html = '';

	//监听data事件，拼接html数据
	res.on('data', function(data){ 
		html += data;
	});

	//监听end事件，输出数据结果
	res.on('end', function(){
		console.log(html);
	});
}).on('error', function(){ 
	console.log('获取课程数据出错！');
});