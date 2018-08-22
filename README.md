# nodejs-crawler
a crawler demo of nodejs

爬虫的主要代码在crawler2.js文件中

里面的代码只是本人的一次练习

不具备通用性

使用http.get()方法来发送请求获取数据

使用cheerio（一个类似jQuery的html解析工具）工具来过滤装载后的html

通过遍历等方式将页面的文本数据以及页面的相关数据格式化成js对象

遍历对象，通过console.log()在控制台逐行输出结果

##api汇总
__url__
url.parse(url, ,  );    //把url字符串转换成对像

url.format(obj);    //把对象转换成url地址

url.resolve(host, path);    //传入主机名和资源路径，生成合法的url地址


__querystring__

querystring.stringify(obj);    //把参数的键值对转化成参数字符串（不带问号）

querystring.parse(queryStr);    //把查询字符串序列化成键值对

querystring.escape(str)/unescape()    //对字符串进行转义和反转义


__http__

http.createServer(function(req, res){    //创建服务器

    res.writeHead(200, {"Content-Type": "text/plain"});    //写入响应头

    res.write("Hello Nodejs");    //写入返回内容

    res.end();    //

}).listen(2018);    //监听2018端口


http.get(url, function(res){    //发送get请求，传入url获取响应数据，返回字符串

    var html = "";

    res.on('data', function(data){    //流式读取，不断触发data事件并返回数据

        html+= data;

    });
    res.on('end', function(){});    //当数据获取完成触发end事件

}).on('error', function(){});    //监听get请求的error事件


http.request(rul, function(res){});    //待进一步了解

__https__

var options = {
    key: fs.readFileSync('ssh_key.pem'),    //同步读取私钥文件

    cert: fs.readFileSync('ssh_cert.pem')    //读取证书文件

    //有了以上两个参数就能创建https的服务器了

}


https.createServer(options, function(req, res){

    res.writeHead(200)

    res.end('hello https')

}).listen(8090);

//除此以外，https的get和request使用方法和http一致


__fs：文件系统__
fs.writeFile(file,data[, options], callback);    //异步写入文件

fs.writeFileSync(file,data[, options], callback);    //同步写入文件

fs.readFile(path[, options], callback);    //异步读取文件

fs.readFileSync(path[, options]);    //同步读取文件

fs.createReadStream(path[, optoin]);    //创建可读流

fs.createWriteStream(path[, option]);    //创建可写流

fs.mkdir(path[, mode], callback);    //异步创建文件夹

fs.mkdirsync(path[, mode]);    //同步创建文件夹

fs.readdir(path[, options], callback);    //异步读取文件夹

fs.readdirSync(path[, option], callback);    //同步读取文件夹

fs.rename(oldPath, newPath, callback);    //异步重命名或移动文件

fs.renameSync(oldPath, newPach)     //异步重命名或移动文件

fs.rmdir(path, callback);    //异步删除文件夹

fs.rmdirSync(path);    //同步删除文件夹

 
__events：事件模块__

events模块只提供了一个对象：events.EventEmitter

var events = require('events');

emiter = new events.EventEmitter();

emiter.on('event1' callback(arg1, arg2));

emiter.addListener('event1' callback(arg1, arg2));

emiter.once('event1', callback(arg1, arg2));

emiter.emit('event1', arg1, arg2);

emiter.removeListener('event1', callback);

emiter.removeAllListener(['evenr1']);

在node中，只要是支持事件响应的核心模块都是EventEmitter的子类，另外我们一般要为会发射error事件的对象设置监听，否则error触发时会导致程序退出；


__Buffer：二进制数据缓存区__

var buf = new Buffer(num);    //创建指定字节数长度的Buffer实例 buf.length == 8;

var buf = new Buffer(str);    //通过过字符串来创建Buffer实例

var buf = new Buffer(arr);    //通过传递的数组创建Buffer实例

第二个餐数可以传入编码格式，如：new Buffer(str, 'base64');


通过数组创建的buffer存的就是数组，通过下标可以访问对应位置的元素，并且小数会直接取整


Buffer.isBuffer(data);    //判断一端数据是否是buffer数据

buf.write(string, offset=0, length, encoding='utf8');    //往buffer中写入数据

buf.toString(encoding, start=0, end=buffer.length);    //输出指定长度的buffer内容
buf.copy(target， tStart, sStart, sEnd=buffer.length); 	//把buffer的指定位置内容copy到指定buffer缓存中

buf.slice(start, end);    //返回buf中指定位置的数据

buf.conpare(otherBuffer);    //比较两个buffer内容是否相同

buf.equals(otherBuffer);    //比较两个buffer是否是同一个

buf.fill(value, offset, end);    //

base64数据图片数据拼接：

data:image/png;base64,+base64编码


__Stream：流__

Readable        Writable/Readable        writable

在Buffer实例的讲解中，读取写入数据都是一次性读取，一次性写入

通过Stream，我们可以实现边读边写，流都是以buffer的形式存在

var readStream = fs.createReadeStream('a.js');   

readStream.on('data/readbale/end/close/error', functoin(){});    //监听可读流的事件

readStream.pause();    //暂停读取流

readStream.resume();    //重新恢复读取



















