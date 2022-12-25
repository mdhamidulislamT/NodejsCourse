const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api/user", userRouter);


app.get('/', (req, res)=>{

    res.send("<h1>I am a get request at home route</h1>");
    res.end();
})

app.use((req,  res)=>{
    res.send("<h1>404!! resquest route not Found!</h1>");
})






module.exports = app