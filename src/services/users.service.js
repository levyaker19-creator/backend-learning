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

module.exports = {
    getUsers,
    createUser
}
