const http = require('http');

const port = 3003;
const hostName = "127.0.0.1";
const myServer = http.createServer((req, res)=>{

    //res.send("<h1>Hello I am Your first Server</h1>");
    res.end("<h1>Hello I am Your first Server</h1>");
//}).listen(3002);
});

myServer.listen(port, hostName,()=>{
    console.log(`Server is running successfully at http://${hostName}:${port}`);
});