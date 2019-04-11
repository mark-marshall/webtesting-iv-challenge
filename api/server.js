const express = require('express');

// const users = require('../Users/usersModel');

const server = express();

server.get('/', async (req, res) => {
    res.status(200).json({ api: 'up' });
  });


module.exports = server;