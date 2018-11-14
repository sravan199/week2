//synchronous reading and writing of files using promises 
var fs = require('fs');

var getData = function(){
           return  new Promise(function(response,reject) {        
      fs.readFile('read1.txt','utf8',function(err,contents){response(contents);});

 });}

 var getData2 =function(){
     return  new Promise(function(response,reject){
     fs.readFile('read2.txt','utf8',function(err,contents){response(contents);});
    });}


 getData().then((readme)=>{
       fs.writeFile('wFile1.txt',readme ,(err,data)=>{
       console.log('wFile1 is created');
       return getData2();})
   }).then((readme2) =>{
        fs.writeFile('wFile2.txt',readme2 ,(err,data)=>{
        console.log('wFile2 is created'); })
   });