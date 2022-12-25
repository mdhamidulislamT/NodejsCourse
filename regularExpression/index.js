const express = require('express');
const app = express();
const PORT = 3003;


app.get('/', (req, res) => {
    res.send("<h1>Welcome to regular expression</h1>")
})

app.get('/products/:id([0-9]+)', (req, res) => {
    const id = req.params.id;
    res.send(`<h1>ID = ${id}</h1>`);
})
app.get('/products/:title([a-zA-Z0-9]+)', (req, res) => {
    const title = req.params.title;
    res.send(`<h1>title = ${title}</h1>`);
})

app.get('*', (req, res) => {
    res.status(404).send({
        message : "not a valid route",
    })
})


app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
});