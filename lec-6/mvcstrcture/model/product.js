let mongoose= require("mongoose")

 const productsSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    productdetails:{
        type:String,
        required:false
    },
    productprice:{
        type:Number,
        required:true
    },
    productreview:{
        type:String,
        required:true
    }

})
module.exports=mongoose.model("product" ,productsSchema)