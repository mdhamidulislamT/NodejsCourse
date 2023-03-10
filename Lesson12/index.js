const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.listen(PORT, () => {
    console.log(`Server is running (Lesson12) at localhost:${PORT}`);
})