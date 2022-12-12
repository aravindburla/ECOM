const express = require("express");
const Mobile = require("../models/mobile");
const router = express.Router();

router.post('/',async(req,res)=>{
    console.log(req.body)
    const product = new Mobile(req.body);
    try{
        const savedProduct = await product.save();
        res.status(200).json(savedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
    // res.status(200).json("hi occured")
    
})

router.get('/find',async(req,res)=>{
    try {
        const products = await Mobile.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

module.exports = router;