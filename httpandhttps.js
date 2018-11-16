var http =require('http');
var server=http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/plain'});
     res.end('from server https');

});
server.listen('3000','127.0.0.1');

var https =require('https');
var server=https.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/plain'});
     res.end('from server hhtps');

});
server.listen(3001,'127.0.0.1');
