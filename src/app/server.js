const express = require('express');
const port = 3000;
const server = express();
const users = require('./models/Users');

server.use(express.json());

server.get('/users', (req, res) => res.json(users));

server.get('/users/:id', (req, res) => {
    const { id } = req.params;
    return res.json(users[id]);
});

server.listen(port, () => console.log(`Server at port ${port}`));