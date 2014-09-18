var fs = require('fs'),
	http = require('http');

	http.createServer(function (req, res){
		res.writeHead(200, {'Content-Type': 'video/mp4'});
		var rs = fs.createReadStream('video.mp4');
		rs.pipe(res);
	}).listen(4000);