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

export const createProduct =(req,res)=>{
    try{
        setTimeout(async() => {
            
            const newProduct = new ProductModel(req.body)
            await newProduct.save()
            res.json(newProduct)
        }, 5000);
    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        })
    }
}

export const updateProduct = (req,res)=>{
    try{
        setTimeout(async() => {
            
            const product = await ProductModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            if(!product)
                return res.status(404).json({message:"product not found"})
            
            res.json(product)
        }, 10000);

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