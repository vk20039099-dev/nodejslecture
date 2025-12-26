const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const userRouter = require("./mvcstrcture/Routers/userrouter");
const productRouter = require("./mvcstrcture/Routers/productRouter");

mongoose.connect("mongodb://localhost:27017/nodelac")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
    });

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.listen(4000, () => {
    console.log(`Server running on port 4000`);
});

