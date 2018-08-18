var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterChapers(html) {
	var $ = cheerio.load(html);

	var chapters = $('.chapter');

	/*[{
		chapterTitle: '',
		videos: [{
			title: '',
			id: ''
		}]
	}]*/

	var courseData = [];

	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find('h3').text().trim();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		};
		videos.each(function(item){
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text().trim();
			var id = video.attr('href').split('video/')[1];
			chapterData.videos.push({
				title: videoTitle,
				id: id
			});
		});
		courseData.push(chapterData);
	});
	return courseData;
};

function printCourseInfo(courseData){
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle;

		console.log(chapterTitle + '\n');

		item.videos.forEach(function(video){
			console.log(' 【' + video.id + '】 ' + video.title + '\n');
		});
	});
};

//通过http.get()方法来发送请求，获取数据
http.get(url, function(res){
	var html = '';

	//监听data事件，拼接html数据
	res.on('data', function(data){
		html += data;
	});

	//监听end事件，输出数据结果
	res.on('end', function(){
		var courseData = filterChapers(html);

		printCourseInfo(courseData);
	});
}).on('error', function(){
	console.log('获取课程数据出错！');
});