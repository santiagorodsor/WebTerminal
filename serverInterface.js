var http = require('http');

var app = http.createServer(function (req, res) {
	var fs = require("fs");	
  res.writeHead(200);
  res.end(fs.readFileSync("./client/index.html"));

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

var emittingNumber = 0;
var io = require("socket.io")(app);
io.on("connection",function(socket){
	
	socket.on("command",function(data){
		console.log("received command: " + data);
		var clc = require("./commandLineConverter");
		clc.call(data.command,socket);
	})
})