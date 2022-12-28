const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3003;


// File Upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + "-" +file.originalname;
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })
  // End File Upload

app.get('/register',  (req, res) =>{
    res.sendFile(__dirname +"/index.html");
})

app.post('/register', upload.single('image'), (req, res) =>{
    res.status(200).json({
        message: "File is uploaded"
    })
})


app.get('/', (req, res) =>{
    res.send("<h1>Welcome to  Upload Image or File</h1>");
})


app.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
})