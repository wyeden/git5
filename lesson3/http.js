/**
 * Created by 58 on 2016/6/25.
 */
var http = require('http');
var fs = require('fs');
http.createServer(function(request,response){


    if(request.url == '/hello.html'){
        response.setHeader('content-type','text/html;charset=utf8')
        fs.createReadStream('./hello.html').pipe(response);
    }else if(request.url == '/style.css'){
        response.setHeader('content-type','text/css;charset=utf8');
        fs.createReadStream('./style.css').pipe(response);
    }


    //增加响应头，告诉浏览器端内容是什么类型，不然写入汉字就乱码了
    //response.setHeader('content-type','text/html;charset=utf8');

    //response.write('你好'); //向客户端写入数据
    //response.end('world'); //向客户端写入数据并且关闭

    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);

    fs.readFile('./hello.html',function(data){
        response.end(data);
    })
}).listen(8080);


//命令行：  curl -v http://localhost:8080