//asynchronous reading and writing of files using promises
var fs = require('fs');

 var getData = new Promise(function(response,reject)
 {        
      fs.readFile('read1.txt','utf8',function(err,contents){response(contents);});
 });

 getData.then((readme)=>{fs.writeFile('wFile1.txt',readme ,(err,data)=>{console.log('wFile1 is created');})});

 
 var getData2 = new Promise(function(response,reject)
 {        
      fs.readFile('read2.txt','utf8',function(err,contents){response(contents);});
 });

 getData2.then((readme)=>{fs.writeFile('wFile2.txt',readme ,(err,data)=>{console.log('wFile2 is created');})});