var http = require('http');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/pain'});
	res.end('Hello World from SB');
	console.log('Request served');
}).listen(8080);

console.log('SB Index.js executed');
