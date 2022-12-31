const handle = (req, res) => {

    console.log(req.app.locals.title);
    res.send("<h1>This is home page</h1>");
}

module.exports = handle;