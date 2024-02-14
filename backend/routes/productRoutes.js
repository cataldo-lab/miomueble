const express=require('express');
const api=express.Router();
const productController=require('../controllers/productController');

api.post('/product',productController.createProduct);


module.exports=api;