const express = require("express");

const app = express();

app.set('view engine', 'ejs');


app.route("/about/mission")
  .get((req, res) => {
    res.render('pages/about')
  })
  .post((req, res) => {
    res.send(`Welcome to application home post`);
  })
  .put((req, res) => {
    res.send(`Welcome to application home put`);
  });

  // Response
  //app.get('/about', (req, res) => {

    //res.send("about page");
    
    //res.end();
    
    /* res.json({
        name: "Bangladesh"
    }) */

    /* res.status(400);
    res.end(); */
    
    //res.sendStatus(403);

   /*  res.format({
        'text/plain' : ()=>{
            res.send("Hi");
        },
        'text/html' : ()=>{
            res.render('pages/about2', {
                name: "Bangladesh"
            })
        },
        'application/json' : ()=>{
            res.json({
                message:"about"
            });
        },
        default : ()=>{
            res.status(406).send("Not Accaptable");
        }
    }); */

   /*  res.cookie('name', "Learnwithsumit");
    res.end(); */

    //res.location('/test');

    /* res.redirect('/about/mission');
    res.end(); */

   /*  res.set('platform', "Learn with sumit 2");
    console.log(res.get('platform'));
    res.end(); */


  //}); 

  // End Response






app.listen(3000, () => {
  console.log("Server is running at 3000 port");
});
