let mongoose = require("mongoose")

let productSchema = new mongoose.Schema({
    product_name: {
        type: String
        , required: true
    },
    product_price: {
        type: Number,
        require: true
    },
    product_priceDoller: {
        type: Number,
        required: false
    },
    productdetails: {
        type: String,
        required: true
    },
    product_color: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("product" , productSchema)