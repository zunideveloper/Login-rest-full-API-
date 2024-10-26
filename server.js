const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3500;

let users = [];
function randomNumber() {
    return Math.floor(Math.random() * 500);
}

// POST endpoint to create a new user
app.post("/user", (req, res) => {
    console.log(req.body); // Log request body

    let newUser = {
        id: randomNumber(),
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
    };

    users.push(newUser); // Add new user to the users array
    res.status(201).send("User is created"); // Respond with success message
});
app.get("/users", (req, res) => {
    res.send(users); // Send the users array
});
app.listen(port, () => {
    console.log(`Server is running on port ${port} 🔥`);
});
