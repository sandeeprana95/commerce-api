import ProductModel from "../model/product.model.js";

export const fetchProduct = async(req,res)=>{
    try{
        const products = await ProductModel.find()
        res.json(products)
    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}

export const createProduct = async(req,res)=>{
    try{
        const newProduct = new ProductModel(req.body)
        await newProduct.save()
        res.json(newProduct)
    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}

export const updateProduct = async(req,res)=>{
    try{
        const product = await ProductModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!product)
            return res.status(404).json({message:"product not found"})

        res.json(product)

    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}

export const deleteProduct = async(req,res)=>{
    try{
        const product = await ProductModel.findByIdAndDelete(req.params.id)
        if(!product)
            return res.status(404).json({message:"product not found"})

        res.json({message:"product deleted successfully"})

    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}