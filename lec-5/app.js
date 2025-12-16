let express = require("express")
let mongoose = require("mongoose")

let app = express()
app.use(express.json());

let User = require("./modals/user");
const user = require("./modals/user");

mongoose.connect("mongodb://localhost:27017/userdata")
    .then(() => {
        console.log("mongoose connect")

    })
    .catch((err) => {
        console.log("not mongoose connected", err)
    })

app.get(
    "/users", async (req, res) => {
        try {

            let users = await User.find()
            res.status(201).json({
                message: "User fetched successfully",
                data: users
            })
        }
        catch
        (error) {
            res.status(404).json({ error: error.message })
        }
    }
)

app.post
    ("/user", async (req, res) => {
        try {
            let user = new User(req.body)
            await user.save()
            res.status(201).json({
                message: "user create",
                data: user
            });
        }
        catch
        (error) {
            res.status(400).json({ error: error.message })
        }
    })

app.listen("3000", () => {
    console.log("posr no> 3000")
})


