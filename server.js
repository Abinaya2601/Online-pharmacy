const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/pharmacy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Product Schema
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
});

const Product = mongoose.model('Product', ProductSchema);

// API to Get All Products
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// API to Add Product to Cart (Dummy)
app.post('/cart', async (req, res) => {
    console.log("Added to cart:", req.body);
    res.json({ message: "Added to cart successfully!" });
});

// Start Server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
