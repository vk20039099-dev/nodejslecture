
let express = require('express');
let app = express()
app.use(express.json());

const users = [{
    id: 1, username: "vishal"
},
{
    id: 2, username: "ved talsaniya"
}
]

app.get("/", (req, res) => {
    res.json(users)
});

app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});


app.listen( 3000 ,()=>{
    console.log("port number: 3000")
})