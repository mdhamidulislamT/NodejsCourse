const fs = require('fs');

// writeFile
// appendFile
// readFile
//fs.rename("demo1.txt", 'demo2.txt', (err,data)=> {
//fs.unlink("demo2.txt", (err)=> {
fs.exists("demo2.txt", (result)=> {
    if (result) {
        //console.log(err);
        console.log("File Exists");
    } else {
        //console.log("Successful!");
        console.log("File does not Exists");
        //console.log(data);
    }
})