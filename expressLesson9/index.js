const express = require('express');
const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
    const id = req.header('id');
    const name = req.header('name');
    res.send(`<h1>This is Home route, student id ${id} and name ${name}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});