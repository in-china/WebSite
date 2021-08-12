var http = require('http');
var express = require('express');
var serverIndex = require('server-index')

var app = express();
app.usr(serverIndex('./public'));
app.use(express.static('./public'));
 
//app.listen(8080,() => {console.log(`Server running at http::/lidong`);});

//http server
var http_sever = http.createServer(app);
http_server.listen(80,'0.0.0.0');



