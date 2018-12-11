
var fs = require('fs');
 
var file1=fs.readFileSync('read1.txt', 'utf8',); 
fs.writeFileSync('writeFile1.txt',file1)
  console.log("writeFile1 created");
 
var file2=fs.readFileSync('read2.txt', 'utf8');
 fs.writeFileSync('writeFile2.txt',file2)
  console.log("writeFile2 created");

 var file3=fs.readFileSync('read3.txt', 'utf8') ;
 fs.writeFileSync('writeFile3.txt',file3)
     console.log("writeFile3 created");

console.log('After calling all readFiles');
