import { Schema,model } from "mongoose";

const productSchema = new Schema({
    title:{
        type:String,
        lowercase:true,
        trim:true,
        required:true
    },
    description:{
        type:String,
        lowercase:true,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true,
        default:10
    }
},{timestamps:true})

const ProductModel = model("Product",productSchema)

export default ProductModel