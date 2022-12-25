const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});

app.use("/login", (req, res) => {
  //res.send("<h1>I am a get request at login route</h1>");
  /* res.cookie("name", "Anisul Islam");
  res.cookie("age", 30); */
  //res.clearCookie("name")
  res.append("id", "130000")
  res.end();
});

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.send("<h1> 404!! request url not fouond</h1>");
  res.end();
});

module.exports = app;
