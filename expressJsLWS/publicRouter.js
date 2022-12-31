const express = require('express');

const publicRouter = express.Router();

publicRouter.param((param, option) => (req, res, next, val) =>{
    if (val === option) {
        next();
    }else{
        res.sendStatus(403);
    }
})

/* publicRouter.param('userId', (req, res, next , id) =>{
    
    req.userId = id==1 ?  "Admin" : "Anonymous";
    
    console.log(id);
    next();
}); */
publicRouter.param('userId', '12');

publicRouter.get('/', (req, res) => {

    res.send("Home")
});

publicRouter.get('/about', (req, res) => {

    res.send("About");
});

publicRouter.get('/user/:userId', (req, res) => {

    res.send(`Hello Admin`);
});


module.exports = publicRouter;