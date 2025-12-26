let express = require("express");
let { addProduct, getProducts, deleteProduct, putProduct} = require("../Controller/productController.js")
let Router = express.Router()   
Router.post("/addproduct", addProduct)
Router.get("/getproducts", getProducts)
Router.put("/putproduct/:id", putProduct)
Router.delete("/deleteproduct/:id", deleteProduct)

module.exports = Router;    