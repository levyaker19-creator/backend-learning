const userService = require("../services/users.service");


const getUsers = (req, res)=> {
     const users = userService.getUsers()
 res.json(users);
    };

const getUserById  = (req,res) => {

    const id = Number(req.params.id)

    const user = userService.getUserById(id)

    if ( !user){
        return res.status(404).json({error:"User not found"})
    }
    return res.json(user)
   };


const postUsers = (req,res)=>{
const {name ,age} = req.body;
   if(!name ||  age === undefined){
        return res.status(400).json({error:"Name and age are required"})
    }else if(typeof name !== "string" || typeof age !== "number"){
        return res.status(400).json({error:"Invalid name or age"})
    } else if (age < 0 || age > 120){
        return res.status(400).json({error:"Age must be between 0 and 120"})
    }else if(name.trim() === ""){
        return res.status(400).json({error:"Name cannot be empty"})
 };
const newUser = userService.createUser(name, age);
return res.status(201).json(newUser);

}
const updateUser = (req, res) => {
    const id = Number(req.params.id);
    const { age } = req.body;
    if (typeof age !== "number" || age < 0 || age > 120) {
        return res.status(400).json({ error: "Invalid age" });
    }

    const updateUser = userService.updateUser(id, age);

    if (!updateUser) {
        return res.status(404).json({ error: "User not found" });
    }

    return res.json(updateUser);
};
 const deleteUser = (req,res)=>{
   const id = Number(req.params.id);
   const deleteUser = userService.deleteUser(id);
   if(!deleteUser){
    return res.status(404).json({error:"User not found"})
   }
   return res.json({message:"User deleted successfully"})
 }

module.exports = {
   getUsers ,
   postUsers,
   getUserById,
   updateUser,
   deleteUser
};