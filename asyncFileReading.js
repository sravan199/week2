//asynchronous reading and writing of files using call backs
var fs = require('fs');
 
fs.readFile('read1.txt', 'utf8', function(err, contents) {
   /// console.log(contents);
   setTimeout(function(){  fs.writeFile('writeFile1.txt',contents,function(error,data)
   {console.log("writeFile1 created")});},1000)
 
});
fs.readFile('read2.txt', 'utf8', function(err, contents) {
    /// console.log(contents);
    fs.writeFile('writeFile2.txt',contents,function(error,data)
    {console.log("writeFile2 created")});
 });
 fs.readFile('read3.txt', 'utf8', function(err, contents) {
    
    fs.writeFile('writeFile3.txt',contents,function(error,data)
    {console.log("writeFile3 created")});
 });
console.log('After calling all readFiles');