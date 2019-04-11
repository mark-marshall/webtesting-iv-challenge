const express = require('express');

const users = require('../Users/usersModel');

const server = express();

server.use(express.json());

/*
[GET] no params or body require, an array of users is returned
*/

server.get('/', (req, res) => {
  const userList = users.get();
  res.status(200).json(userList);
});

server.post('/users', (req, res) => {
  const entry = req.body;
  const addedUserResponse = users.post(entry);
  if (addedUserResponse.name) {
    res.status(201).json(addedUserResponse);
  } else {
    res.status(400).json(addedUserResponse);
  }
});

server.delete('/users/:id', (req, res) => {
  const { id }  = req.params;
  const deletedUserResponse = users.remove(parseInt(id));
  if (deletedUserResponse.name) {
    res.status(200).json(deletedUserResponse);
  } else {
    res.status(400).json(deletedUserResponse);
  }
});

module.exports = server;
