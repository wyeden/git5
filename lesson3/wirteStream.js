/**
 * Created by 58 on 2016/6/25.
 */
var fs = require('fs');
//如果文件不存在，会创建文件
/*var ws = fs.createWriteStream('./2.txt',{
    flags:'w',  //向文件内写入 每次都清空  不会累加  累加参数： a
    encoding:null,
    //start:10,  //从哪个地方开始
    highWaterMark:1  //默认值为16k 当可读的
});*/
//console.log(ws);
//ws.write('a');  //往文件里写内容
//ws.end('b');    //停止再次写入 end后文件被关闭
//ws.write('aa');  //报错不能写入

//var flag = ws.write('a');  //flag是否写入成功
//console.log(flag);

/*while(true){
    var flag = ws.write('a');
    console.log(flag);
}*/

/*var i = 0;
while(i<5){
    var flag = ws.write('a');  //flag代表是否还可以写入  write只能放字符串和buffer
    console.log(flag);
    i++;
}*/
/*
ws.write('a');
ws.write('a');
ws.write('a');*/

/*
ws.on('drain',function(){

});*/


function copy(source,target){
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);

    rs.on('data',function(data){
        var flag = ws.write(data);
        if(!flag){
            rs.pause();
        }
    });
    ws.on('drain',function(){
        rs.resume();
    })
    rs.on('end',function(){
        ws.end();  //end会强制将将缓存区内容写入
    })
}
copy('./1.txt','./2.txt');