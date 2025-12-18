let express = require("express")
let mongoose = require("mongoose")
let allProducts = require("./modals/product")
let product = express()
product.use(express.json())

mongoose.connect("mongodb+srv://vk20039099_db_user:vishal%4012345@cluster0.yqvambu.mongodb.net/ ")
    .then(() => {
        console.log("connect mongoose successfully ");

    })
    .catch((err) => {
        console.log("error  ", err);

    })

product.get("/products/:name", async (req, res) => {
    try {
       console.log("hello0")
          let products = await allProducts.find()
            res.status(201).json({
                message:"feching data successfully",
                data:products
            })
            console.log(products)
        }
    
    catch {
        (err) => {
            console.log({
                message:console.log("err",err)
            })
        }
    }
});

product.post("/product", async (req, res) => {
    try {
        let product_item = new allProducts(req.body)
        await product_item.save()
        res.status(201).json({
            message: "user create",
            data: product_item
        });

    }
    catch {
        (err) => {
           res.status(404).json({ error: err.message })
        }
    }
})

product.listen(3000,()=>{
    console.log("port no. : 3000");
    
})