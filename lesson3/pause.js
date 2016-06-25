/**
 * Created by 58 on 2016/6/25.
 */
var fs = require('fs');
var rs = fs.createReadStream('./1.txt',{
    hightWaterMark:2
});

rs.on('data',function(data){
    console.log(data);
    rs.pause();
});
setTimeout(function(){
    rs.resume(); //恢复流
},3000)
rs.on('end',function(data){
    console.log('end');
});
