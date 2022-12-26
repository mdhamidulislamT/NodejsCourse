const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


// home route
app.get('/', (req, res) => {

   res.sendFile(__dirname + "/index.html");
});

app.use((req, res, next) => {

    res.status(404).json({
        message : "request url.route not fuond"        
    })
    
 });



module.exports = app;
