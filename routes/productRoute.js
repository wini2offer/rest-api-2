const express = require("express");
const router = express.Router();
const { getAllProduct, getSingleProduct, createNewProduct, updatedProduct, deletedProduct

} = require("../controllers/productController")

//  This Section is For All Products
router.get('/product', getAllProduct)


// This Section is for Single Product
router.get('/product/:id',getSingleProduct)


// This Section is for New Products
router.post('/product', createNewProduct)

// This Section is for Updated Products
router.put('/product/:id', updatedProduct)

// This Section is for Deleted Products
router.delete('/product/:id', deletedProduct)

module.exports = router;