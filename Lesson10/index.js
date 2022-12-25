require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.get('/', (req, res) =>{
    res.send("Welcome to home page");
})

app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
})