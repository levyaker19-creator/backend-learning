const users = [
    { id: 1, name: "Levy", age: 22 },
    { id: 2, name: "João", age: 25 }
];

function getUsers(){
        return users;
}

function createUser(name, age){
     const newUser = {
        id: users.length + 1,
        name: name.trim(),
        age
     }
     users.push(newUser);
      return newUser;

}
function getUserById(id){
    const user = users.find((user)=>{
        return user.id === id 
    })
    return user;
}

function updateUser(id, age){
    const user = users.find((user)=>{
        return user.id === id
    })
    if(!user){
        return null;
    }   
    user.age = age;
    return user ;
}

function deleteUser(id){
    const index = users.findIndex((user)=>{
        return user.id === id
    })
    if(index === -1){  
        return null;    
}   
    users.splice(index,1)
    return true;
}   
    

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}
