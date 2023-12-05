const { prisma } = require('../prisma-client/index');

async function getAllTodos() {
  const todos = await prisma.todos.findMany();
  return todos;
}

async function createTodos(dataBody) {
  const { todo_item } = dataBody;
  const dataCreated = await prisma.todos.create({
    data: {
      todo_item
    }
  });
  return dataCreated;
}

module.exports = { getAllTodos, createTodos };
