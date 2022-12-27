require("dotenv").config()
const app = require('./app');

const PORT = process.env.app || 3003;


app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
})