
const express = require("express");

const app = express();


app.use(express.json());
const users = []



app.get("/users", (req,res)=>{
    res.json(users);
});
app.get("/users/:id",(req,res) => {

    const id = Number(req.params.id)

    const user = users.find(user => user.id === id)

    if ( !user){
        return res.status(404).json({error:"User not found"})
    }
    return res.json(user)

});
app.post("/users", (req,res) => {
    const {name,age} = req.body;
    if(!name ||  age === undefined){
        return res.status(400).json({error:"Name and age are required"})
    }else if(typeof name !== "string" || typeof age !== "number"){
        return res.status(400).json({error:"Invalid name or age"})
    } else if (age < 0 || age > 120){
        return res.status(400).json({error:"Age must be between 0 and 120"})
    }else if(name.trim() === ""){
        return res.status(400).json({error:"Name cannot be empty"})
    }
    const  newUser= {
        id: users.length + 1,
        name: name.trim(),
        age
    };
    users.push(newUser);
    res.status(201).json(newUser);
});   

app.put("/users/:id",(req,res) =>{
    const id = Number(req.params.id)
    const { age } = req.body;
    const user = users.find(user => user.id === id);
    if(!user){
        return res.status(404).json({error:"User not found"})
    }
    
    if (typeof age !== "number" || age < 0 || age > 120){
        return res.status(400).json({error:"Invalid age"})
    }
    user.age = age ;
   return  res.json(user);
})
app.delete("/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const index = users.findIndex((user)=>{
        return user.id === id})

if(index === -1){
 return res.status(404).json({error:"User not found"})
}
 users.splice(index,1)
return res.json(users)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});