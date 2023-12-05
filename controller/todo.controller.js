const { prisma } = require('../prisma-client/index');
const { getAllTodos, createTodos } = require("../services/todo.services");

async function getTodos(req, res) {
  try {
    const todos = await getAllTodos();
    res.status(200).json({
      success: true,
      message: "your todos",
      data: todos
    });

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
}

async function postTodos(req, res) {
  try {
    const dataCreated = await createTodos(req.body)
    res.status(201).json({
      success: true,
      message: "todo created",
      data: dataCreated
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
}

module.exports = { getTodos, postTodos };
