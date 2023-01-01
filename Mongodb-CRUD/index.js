const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// create product schema
const productsSchema = new mongoose.Schema({
  title: {
    type : String,
    required: true
  },
  price: {
    type : Number,
    required: true
  },
  description: {
    type : String,
    required: true
  },
  rating: {
    type : Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
// create product model
const Product = mongoose.model('Products', productsSchema);


app.get("/", (req, res) => {
  res.send("Welcome to mongodb home page");
});

// Create Product
app.post("/products", async (req, res) => {
  
  try {
    const { title, price, description } = req.body;
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      rating: req.body.rating
    })

    const productData = await newProduct.save();

    res.send(productData);

  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }

});

// Update Product
app.put("/products/:id", async (req, res) => {
  
  try {
  
    const id = req.params.id;
    const updateaProduct = await Product.findByIdAndUpdate({_id: id}, {
      $set :{
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        rating: req.body.rating
      },
    },
    {new: true}
    );

    res.send(updateaProduct);

  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }

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
