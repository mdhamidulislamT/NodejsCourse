const http = require('http');

const port = 3003;
const hostName = "127.0.0.1";
const myServer = http.createServer((req, res)=>{

    /* res.writeHead(202, {'Content-type':'text/plain'})
    res.write("Hello I am Your first Server 202 updated.") */


    res.writeHead(202, {'Content-type':'text/html'})
    res.write("<h1>Hello I am Your first Server 202 updated.</h1>")
    res.write("<h1> I am Your first Server 203 updated.</h1>")

    res.end();
});

myServer.listen(port, hostName,()=>{
    console.log(`Server is running successfully at http://${hostName}:${port}`);
});