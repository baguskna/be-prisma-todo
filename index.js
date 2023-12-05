require('dotenv').config();
const express = require("express");
const cors = require("cors");
const todoRoutes = require('./routes/todo.router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hey yoo!!!",
  });
});

app.use('/api/todos', todoRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
