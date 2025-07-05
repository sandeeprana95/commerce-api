import { Router } from "express"
import { createProduct, deleteProduct, fetchProduct, updateProduct } from "../controller/product.controller.js"

const productRouter = Router()

productRouter.get("/",fetchProduct)
productRouter.post("/",createProduct)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)

export default productRouter