const express = require('express');
const app = express();
const PORT = 3003;

const myMiddleware = (req, res, next) =>{
    console.log("middleware function calling");
    console.log('Time:', Date.now())

    next();
}

app.get('/', myMiddleware ,(req, res) =>{
    res.send("<h1>Welcome to  middleware</h1>");
})

app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
})