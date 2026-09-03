
const express = require("express");

const usersRoutes = require("./src/routes/users.routes");

 
const app = express();

app.use(express.json());
const users = []

app.use(usersRoutes);


app.get("/users/:id",(req,res) => {

    const id = Number(req.params.id)

    const user = users.find(user => user.id === id)

    if ( !user){
        return res.status(404).json({error:"User not found"})
    }
    return res.json(user)

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