const express = require("express");

const { getTodos, postTodos } = require('../controller/todo.controller');

const router = express.Router();

router.get('/', getTodos);
router.post('/', postTodos);

module.exports = router;
