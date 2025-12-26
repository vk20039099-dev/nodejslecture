const User = require('../model/mongodb.js');
const mongoose = require('mongoose');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: "Users fetched successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getoneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            message: "User fetched successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            message: "User Created",
            data: user
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const addUsers = async (req, res) => {
    try {
        const users = req.body;
        let userData = await User.insertMany(users);
        res.status(201).json({
            message: "Users Created",
            data: userData
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const putUser = async (req, res) => {
    try {

        const { _id,
            ...updateData } = req.body;


        const replacedUser = await User.findOneAndReplace(
            { _id: req.params.id },
            updateData,
            {
                new: true,
                runValidators: true,
                overwrite: true
            }
        );
        if (!replacedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            data: replacedUser
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


const patchUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true,
                runValidators: true
            }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(
            updatedUser
        );
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User deleted successfully"
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}


module.exports = {
    getUsers,
    getoneUser,
    addUser,
    addUsers,
    putUser,
    patchUser,
    deleteUser,

};







