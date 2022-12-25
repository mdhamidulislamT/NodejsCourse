const express = require('express');
const app = express();
const PORT = 3003;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send(`<h1>This is Home route</h1>`)
})

app.get('/register', (req, res) =>{
    res.sendFile(__dirname+"/index.html");
})

app.post('/register', (req, res) =>{
    const {fullName ,age} =req.body;
    res.send(`<h1> ${fullName} and ${age} <br> register Form submitted successfully! </h1>`)
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});