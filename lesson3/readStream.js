/**
 * Created by 58 on 2016/6/25.
 */
var fs = require('fs');
var rs = fs.createReadStream('./2.txt',{
    flags:'r', //read
    encoding:null, //编码格式
    start:3, //其实索引位置
    end:6,  //索引结束位置
    highWaterMark:1  //单位：字节，最高水位线 默认是64k，每次读到缓存里的大小，最小为1  64k*1024字节
});

//默认读到的是buffer
//根据highWaterMark大小读取多次出发data事件
//
rs.on('data',function(data){
  console.log(data);
});

rs.on('end',function(data){
    console.log('读完了');
});

//
rs.on('error',function(){
    console.log('error');
})