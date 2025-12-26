const Products = require("../model/product")

const mongoose = require("mongoose")
exports.getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json({
            message: "Products fetched successfully",
            data: products
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

exports.addProduct = async (req, res) => {
    try {
        const product = new Products(req.body);
        const savedProduct = await product.save();
        res.status(201).json({
            message: "Product added successfully",
            data: savedProduct
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.putProduct = async (req, res) => {
    try {
        const { _id,
            ...updateData } = req.body;
        const updatedProduct = await Products.findByIdAndUpdate(_id, updateData, { new: true });
        res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}


exports.deleteProduct = async (req, res) => {

    try {
        const deletedProduct = await Products.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Product deleted successfully",
            data: deletedProduct
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }


}
