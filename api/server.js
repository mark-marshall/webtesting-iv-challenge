const express = require('express');

const users = require('../Users/usersModel');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    const userList = users.get();
    res.status(200).json(userList);
  });


module.exports = server;
