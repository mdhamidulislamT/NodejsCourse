const express = require("express");
const userRoute = require("./routes/users.route");
const productRoute = require("./routes/products.route");

const app = express();
const PORT = 3003;

app.use(express.urlencoded({ extended: true }));

app.use(userRoute);
app.use(productRoute);

app.use((req, res, next) => {
  res.status(404).json({
    message: "request not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running (MVC ARCHITECHTURE) at ${PORT}`);
});
