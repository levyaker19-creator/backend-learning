
const express = require("express");

const usersRoutes = require("./src/routes/users.routes");

const app = express();

app.use(express.json());

app.use(usersRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});