/**
 * Created by wangyingchao on 2017/12/29.
 */
let path = require('path');
let file = __dirname+'/test.json';//数据源
let fs=require('fs');
let result=JSON.parse(fs.readFileSync(file));
let newArr = [];
for(var i=0;i<result.features.length;i++){
    for(var j=0;j<result.features[i].geometry.coordinates[0].length;j++){
        result.features[i].geometry.coordinates[0][j][0] += 350;//批量修改横坐标偏移量
        result.features[i].geometry.coordinates[0][j][1] -= 40;//批量修改纵坐标偏移量
    }
}

let newfilepath_json=path.join(__dirname,"/test5.json");//导出文件位置及文件名
fs.writeFile(newfilepath_json, JSON.stringify(result));