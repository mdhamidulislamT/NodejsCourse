const app = require('./app')
const PORT = 3003;

app.listen(PORT, ()=>{
    console.log(`Server express2 is running at localhost:${PORT}`);
})