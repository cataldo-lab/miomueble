const Product=require('../models/products');

const createProduct=(req,res) =>{
    const {name,price,quantity,description}=req.body;
    const newProduct=new Product({
            name,
            price,
            quantity,
            description
        });
    newProduct.save((err,product)=>{
        if (err){
            return res.status(400).send({message:"Error al crear el producto"})
        }
        return res.status(200).send(product);

    })

}

module.exports = {
    createProduct
}