const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json())

const users = [
    {id:1, name:"sabana", email:"sabana@gmail.com"},
    {id:2, name:"babana", email:"babana@gmail.com"},
    {id:3, name:"tabana", email:"tabana@gmail.com"},
    {id:4, name:"yeasmin", email:"yeasmin@gmail.com"}
]


app.get("/", (req, res)=>{
    res.send("users server running")
});

app.get("/users", (req, res) =>{
    res.send(users)
});

app.post("/users", (req, res) =>{
    console.log("hitting")

    const newUser = req.body;
    
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)

})


app.listen(port, ()=>{
    console.log(`user server port is: ${port}`)
})


