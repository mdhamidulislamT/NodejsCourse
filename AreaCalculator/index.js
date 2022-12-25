const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const PORT = 3003;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.sendFile(__dirname+ "/index.html");
})

app.get('/circle', (req, res) => {
    res.sendFile(__dirname+ "/circle.html");
})

app.get('/triangle', (req, res) => {
    res.sendFile(__dirname+ "/triangle.html");
})


app.post('/triangle', (req, res) => {
    const {base, height} = req.body;
    const area = 0.5 * base * height;
    res.send(`<h2> Area of Traingl is : ${area}  </h2>`)
})

app.post('/circle', (req, res) => {
    const {radius} = req.body;
    const area = Math.PI * radius * radius;
    res.send(`<h2> Area of circle is : ${area}  </h2>`)
})


app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
});