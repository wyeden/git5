/**
 * Created by 58 on 2016/6/25.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response){

    var pathname = url.pat
    if(request.url == '/hello.html'){
        response.setHeader('content-type','text/html;charset=utf8')
        fs.createReadStream('./hello.html').pipe(response);
    }else if(request.url == '/style.css'){
        response.setHeader('content-type','text/css;charset=utf8');
        fs.createReadStream('./style.css').pipe(response);
    }

}).listen(8080);


//命令行：  curl -v http://localhost:8080