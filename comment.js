var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content': '博主你好',
	'id': '81780717',
	'replyId': ''
})

var options = {
	hostname: 'blog.csdn.net',
	port: 80,
	path: '/logan_LG/article/details/81780717',
	method: 'POST',
	headers: {
		'Accept': '*/*',
		'Accept-Encoding': 'gzip, deflate, br',
		'Accept-Language': 'zh-CN,zh;q=0.9',
		'Connection': 'keep-alive',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie': 'uuid_tt_dd=10_4555389830-1534519121482-471565; smidV2=201808190033078235ad2d3c3c833adcbea46874fca2ac0061f21dfe331c960; __yadk_uid=FvBhQA9vkIzv2Ist8kG1UjDMyUd5LIpV; dc_session_id=10_1534642730210.805914; Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac=1534519126,1534609918,1534612841,1534642733; TY_SESSION_ID=2219b0c3-1e45-4479-93fa-27f2b6d53d62; UserName=Annie_WP; UserInfo=VmfXpCsCGyEoL%2F7nLapw%2F0P8uyXKsiBhLi%2FlG3fF4%2BdqEHXn99CdiDLS8h8ouPdJX%2FOGaAMID49FV4GkHa48t1SxwV1WTCQBcc%2FY5A94LmoXMuK9u3Jitzka%2F0FpLQFz; UserNick=Annie_WP; UN=Annie_WP; AU=3C1; BT=1534643061121; UserToken=VmfXpCsCGyEoL%2F7nLapw%2F0P8uyXKsiBhLi%2FlG3fF4%2BdqEHXn99CdiDLS8h8ouPdJX%2FOGaAMID49FV4GkHa48t1SxwV1WTCQBcc%2FY5A94Lmqjokqh9w%2BjZJNXejp9C8jmxFEanW6LOp1fk%2BOHNOuH5EnOvw4%2BkPSJe57BHgVs8oQ%3D; dc_tos=pdoq62; Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac=1534643067',
		'Host': 'blog.csdn.net',
		'Origin': 'https://blog.csdn.net',
		'Referer': 'https://blog.csdn.net/logan_LG/article/details/81780717',
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
		'X-Requested-With': 'XMLHttpRequest',
		'X-Tingyun-Id': 'wl4EtIR_7Is;r=643095711'
	}
}

var req = http.request(options, function(res){
	console.log('Status: '+ res.statusCode)
	console.log('headers: ' + JSON.stringify(res.headers))

	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end', function(){
		console.log('评论完毕！')
	})
});
req.on('error', function(e){
	console.log("Error: " + e.message)
})

req.write(postData)

req.end()
