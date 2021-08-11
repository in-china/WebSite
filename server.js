var server = require("http");
server.createServer(function(request,response){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.end("Hello,yuandi qifei");
}).listen(9000);
console.log("server running at http://127.0.0.1:9000");
