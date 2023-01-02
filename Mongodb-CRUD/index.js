const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const app = express();

const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/products/create', (req, res) =>{

  res.sendFile(path.join(__dirname + "/product.html"));
});

// create product schema
const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    uppercase: true,
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [1, "too short"],
    maxlength: [12, "too long"],
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// create product model
const Product = mongoose.model("Products", productsSchema);

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to mongodb home page</h1> <h2> -> nodejs , <br>-> express js, <br>-. MongoDB Compass ,<br>-> mongoose,</h2> <p>how to use mongose using epxress js</p>"
  );
});

// Create Product
app.post("/products", async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      rating: req.body.rating,
    });

    const productData = await newProduct.save();

    res.send(productData);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// Update Product
app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateaProduct = await Product.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          description: req.body.description,
          rating: req.body.rating,
        },
      },
      { new: true }
    );

    res.send(updateaProduct);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// Get All Products
app.get("/products", async (req, res) => {
  try {
    //const products = await Product.find();
    /*  const products = await Product.find().select({
      title:1,
      price:1,
      description:1
    }); */

    let products;
    let productCount;
    const price = req.query.price;
    if (price) {
      products = await Product.find({
        price: {
          $gt: price,
        },
      });
    } else {
      products = await Product.find().select({ createdAt: 0 });
      productCount = await Product.find().countDocuments();
    }

    if (products) {
      res.status(200).send({
        success: true,
        message: "return all products",
        data: products,
        productCount: productCount,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Products not Found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// Get A Product
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id });
    if (product) {
      res.status(200).send({
        success: true,
        message: "return single product",
        data: product,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Product not Found",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// Get A Product
app.delete("/products/:id", async (req, res) => {
  try {
    //const result = await Product.deleteOne({_id:req.params.id});
    const result = await Product.findByIdAndDelete({ _id: req.params.id }); // return deleted product
    if (result) {
      res.status(200).send({
        success: true,
        message: "deleted single product",
        data: result,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "single product was not found with!",
      });
    }
  } catch (error) {}
});

// DATABASE -> collections -> document

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
