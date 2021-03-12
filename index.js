require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
// app.use(express.static(__dirname + '/public'));

app.get("/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Roberto",
    },
    {
      id: 2,
      name: "Marta",
    },
  ];
  res.json(users);
});

app.post("/users", (req, res) => {

  const user = req.body;
  user.id = 86546 ;

  const result = {
    message: "User created",
    user
  };
  res.status(201).json(result);
});

app.put("/users/:id", (req, res) => {

    const { id } = req.params;
    const user = req.body;

    user.id = id;

  const result = {
    message: "User updated",
    user
  };
  res.status(201).json(result);
});

app.patch("/users", (req, res) => {
  const result = {
    message: "User updated with patch",
  };
  res.json(result);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const result = {
    message: `User ${id} deleted`,
  };
  res.json(result);
});
app.listen(port, () => {
  console.log(`Server started - Port ${port}`);
});
