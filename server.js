var http = require('http');
var express = require('express');
var serveIndex = require('serve-index');

var app = express();
app.use(serveIndex('./public'));
app.use(express.static('./public'));
 
//app.listen(8080,() => {console.log(`Server running at http::/lidong`);});

//http server
var http_server = http.createServer(app);
http_server.listen(8080,'0.0.0.0');



