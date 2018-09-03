# nodejs-crawler
a crawler demo of nodejs

爬虫的主要代码在crawler2.js文件中

里面的代码只是本人的一次练习

不具备通用性

使用http.get()方法来发送请求获取数据

使用cheerio（一个类似jQuery的html解析工具）工具来过滤装载后的html

通过遍历等方式将页面的文本数据以及页面的相关数据格式化成js对象

遍历对象，通过console.log()在控制台逐行输出结果

## api汇总

### url

url.parse(url, ,  );    //把url字符串转换成对像

url.format(obj);    //把对象转换成url地址

url.resolve(host, path);    //传入主机名和资源路径，生成合法的url地址


### querystring

querystring.stringify(obj);    //把参数的键值对转化成参数字符串（不带问号）

querystring.parse(queryStr);    //把查询字符串序列化成键值对

querystring.escape(str)/unescape()    //对字符串进行转义和反转义


### http

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

### https

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


### fs：文件系统
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

 
### events：事件模块

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


### Buffer：二进制数据缓存区

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


### Stream：流

Readable        Writable/Readable        writable

在Buffer实例的讲解中，读取写入数据都是一次性读取，一次性写入

通过Stream，我们可以实现边读边写，流都是以buffer的形式存在

var readStream = fs.createReadeStream('a.js');   

readStream.on('data/readbale/end/close/error', functoin(){});    //监听可读流的事件

readStream.pause();    //暂停读取流

readStream.resume();    //重新恢复读取

## Nodejs工具模块之 

### OS模块
OS模块提供了一些基本的系统操作函数

var os = require( 'os' );    //引入

os.tmpdir();    //返回操作系统默认临时文件夹

os.endianness();    //返回CPU的字节序

os.hostname();    //返回操作系统的主机名

os.type();    //返回操作系统名

os.platform();    //返回操作系统名

os.arch();    //返回操作系统CPU架构，可能的值有“x64”、“arm”、“ia32”

os.release();    //返回操作系统的发型版本

os.uptime();    //返回操作系统运行的事件，以秒为单位

os.loadavg();    //返回一个包含1、5、15分钟平均负载的数组

os.totalmem();    //返回系统内存总量，单位为字节

os.freemem();    //返回操作系统空闲内存量

os.cpus();    //返回一个对象数组，包含所安装的每个cpu/内核的信息

os.networkInterfaces();    //获得网络接口列表

os.EOL    //定义了操作系统的行尾符的常量

### path模块
path模块提供了一些用于处理文件路径的小工具

var path = require( 'path' );

path.normalize(p);    //规范化路径，注意‘..’和‘.’

path.join([path1][ ,path2][ ,...]);    //用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是“/”，windows系统是“\”；

path.resolve([from ...], to)    //将to参数解析为绝对路径

path.isAbsolute(path);    //判断参数path是否是绝对路径。

path.relative(from, to);    //用于将相对路径转为绝对路径

path.dirname(p);    //返回路径中代表文件夹的部分

path.basename(p[ , ext]);    //返回路径中最后一部分

path.extname(p)    //返回路径中文件的后缀名

path.parse(pathString);    //返回路径字符串的对象

path.format(pathObject);    //从对象中返回路径字符串

__属性__

path.sep    //平台的文件路径分隔符，“\\”或“/”

path.delimiter    //平台的分隔符，；or“：”

path.posix    //提供上述path的方法，不过总是以posix兼容的方式交互

path.win32    //提供上述path的方法，不过总是以win32兼容的方式交互。



### net：网络模块
Net模块

用于底层的网络通信，提供了服务端和客户端的操作
包含了创建服务器/客户端的方法
var net = require( 'net' );

net.createServer( [options][ ,connectionListener] );    //创建一个TCP服务器。connectionListener自动给connection事件创建监听器

net.connect(options[ , connectionListener]);    //返回一个新的‘net.Socket’，并连接到指定的地址和端口。当socket建立的时候，将会触发connect事件

net.createConnection(optoins[ , connectionListener]);    //创建一个到端口port和主机host的TCP连接。host默认为localhost。

net.connect(port[ , host][ , connectListener]);    //创建一个端口为port和主机为host的TCP连接。host默认为localhost。参数connectListener将会作为监听器添加到connect事件。返回"net.socket"

net.createConnection(port[ , host][ , connectListener]);    //创建一个端口为port和主机为host的TCP连接。host默认为localhost。connectListener参数将会作为监听器添加到connect事件。返回“net.socket”。

net.connect(path[ , connectListener]);    //创建连接到path的unix socket。参数connectListener将会作为监听器添加到connect事件。返回“net.socket”。

net.createConnection(path[ , connectListener]);    //创建连接到path的unix socket。参数connectListener将会作为监听器添加到connect事件。返回“net.socket”。

net.isIP(input);    //检测输入的是否为IP地址。IPv4返回4，IPv6返回6，其他情况返回0。

net.isIPv4(input);    //如果输入地址为IPv4返回true，否则返回false。

net.isIPv6(input);


net.Server
net.Server通常用于创建一个TCP或本地服务器。

server.listen(port[ , host][ , backlog][ , callback]);    //监听指定端口和主机host ac连接。默认情况下host接收任何IPv4地址的直接连接。端口port为0时则会分配一个随机端口。

server.listen(path[ , callback]);    //通过指定path的连接，启动一个本地socket服务器

server.listen(handle[ , callback]);    //通过指定句柄连接

server.listen(options[ , callback]);    
//options的属性：端口port，主机host，和backlog，以及可选参数callback函数

server.close([callback]);    //服务器停止接收新的连接，保持现有链接。这是一部函数，当所有连接结束的时候服务器会关闭，并会触发“close”事件。

server.address();    //操作系统返回绑定的地址，协议族名和服务器端口

server.unref();    //如果这是事件系统中唯一 一个活动的服务器，调用unref将允许程序退出。

server.ref();    //与unref相反，如果这是唯一的服务器，在之前被unref了的服务器上调用ref将不会让程序退出（默认行为）。如果服务器一杯ref，则再次调用ref并不会产生影响

server.getConnections(callback);    //一部获取服务器当前活跃连接的数量。当socket发送给子进程后才有效；回调函数有两个参数err和count


事件
listening    //当服务器调用server.listen绑定后会触发

connection    //当新连接创建后会被触发。socket是net.Socket实例

close    //服务器关闭时会触发。注意，如果存在连接这个事件不会被触发直到所有的连接关闭。

error    //当发生错误时触发。


net.Socket

net.Socket对象是TCP或UNIX Socket的抽象。net.Socket实例实现了一个双工流程接口。

事件：net.socket事件有：

lookup    //在解析域名后，但在连接前，触发这个事件。对UNIX socket不适用

connect    //成功建立socket连接时触发

data    //当接收到数据时触发。

end    //当socket发送FIN包时触发

timeout    //当socket空闲超时时触发，仅表明socket已经空闲。用户必须手动关闭连接

drain    //当写缓存为空的时候触发。可用来控制上传。

error    //错误发生时触发

close    //当socket完全关闭时触发，参数had_

error是布尔值，他比奥斯是否因为传输错误导致socket关闭


属性
net.socket提供了很多有用的属性，便于控制socket交互

socket.bufferSize    //该属性显示了要写入缓冲区的字节数

socket.remoteAddress    //远程的IP地址字符串

socket.remoteFamily    //远程IP协议族字符串，比如“IPv4”or“IPv6”

socket.remotePort    //远程端口，数字表示

socket.localAddress    //网络连接绑定的本地接口 远程客户端正在连接的本地IP地址。

socket.localPort    //本地端口地址，数字表示

socket.bytesRead    //接收到的数字字节数

socket.bytesWritten    //发送的字节数

方法
new net.socket([options]);    //构造一个新的socket对象。

socket.connect(port[ , host][ , connectListener]);    //指定端口port和主机host，创建socket连接。参数host默认为localhost。


socket.connect(path[ , connectListener]);    //打开指定路径的unix socket.

socket.setEncoding([encoding]);    //设置编码

socket.write(data[ , encoding][ , callback]);    //在socket上发送数据。第二个参数指定了字符串的编码，默认是UTF8编码


socket.end([data][ , encoding]);    //半关闭socket。例如，它可以发送一个FIN包。可能服务器仍在发送数据

socket.destroy();    //确保没有I/O活动在这个套接字上。只有在错误发生情况下才需要。

socket.pause();    //暂停读取数据。就是说，不会再触发data事件。对于控制上传非常有用。

socket.resume();    //调用pause()后向回复读取数据

socket.setTimeout(timeout[ , callback]);    //socket闲置事件超过timeout毫秒后，将socket设置为超时。

socket.setNoDelay([noDelay]);    //禁用哪个（Nagle）算法。默认情况下TCP连接使用哪个算法，在发送前他们会缓冲数据。将noDelay设置为true将会在调用socket.write()时立即发送数据。noDelay默认值为true。

socket.setKeepAlive([enable][ , initialDelay]);    //禁用/启用长连接功能，并在发送第一个在闲置.......

socket.address();    //操作系统返回绑定得地址，协议族名和服务器端口。返回的对象有三个属性{port:12346, family: 'IPv4', address: '127.0.0.1'}


socket.unref();    //如果这是唯一的活动的服务器，调用unref将允许程序退出。如果服务器一杯unref，则再次调用unref并不会长生影响

socket.ref()    //与unref相反。


### process



















