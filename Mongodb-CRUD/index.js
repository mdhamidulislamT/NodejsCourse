const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3002;

app.get("/", (req, res) => {
  res.send("Welcome to mongodb home page");
});

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testProductDB");
    console.log("mongoose db is connected");
  } catch (error) {
    console.log("mongoose db is connected");
    console.log(error);
    process.exit(1);
  }
};


app.listen(PORT, async () => {
  console.log(`Server is running at ${PORT}`);

  await connectDB();

});
