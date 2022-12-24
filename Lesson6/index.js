const http = require('http');
const fs = require('fs');

const port = 3003;
const hostName = "127.0.0.1";
const myServer = http.createServer((req, res)=>{

    if (req.url === "/") {
        fs.readFile("./views/index.html", (err, data)=>{
            res.writeHead(200, {"Content-Type":"text/html"})
            res.write(data);
            res.end();
        })
    } else if (req.url === "/about") {
        fs.readFile("./views/about.html", (err, data)=>{
            res.writeHead(200, {"Content-Type":"text/html"})
            res.write(data);
            res.end();
        })
    } else if (req.url === "/contact") {
        fs.readFile("./views/contact.html", (err, data)=>{
            res.writeHead(200, {"Content-Type":"text/html"})
            res.write(data);
            res.end();
        })
    } else{
        fs.readFile("./views/error.html", (err, data)=>{
            res.writeHead(200, {"Content-Type":"text/html"})
            res.write(data);
            res.end();
        })
    }

    //res.end("welcome to the server updated");
});

myServer.listen(port, hostName,()=>{
    console.log(`Server is running successfully at http://${hostName}:${port}`);
});