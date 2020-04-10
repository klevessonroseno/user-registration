const express = require('express');
const port = 3000;
const server = express();
const users = require('./models/Users');

server.use(express.json());

server.use((req, res, next) => {
    console.time('Request');
    console.log(`Method: ${req.method} URL: ${req.url}`);
    
    next();

    console.timeEnd('Request');
});

server.get('/users', (req, res) => res.json(users));

server.get('/users/:id', (req, res) => {
    const { id } = req.params;
    return res.json(users[id]);
});

server.post('/users', (req, res) => {
    const { name, age } = req.body;
    users.push({ name, age });
    return res.json(users);
});

server.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    
    users[id] = { name, age };

    return res.status(200).json({ message: 'User updated'});
});

server.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    users.splice(id, 1);
    return res.status(200).json('User deleted');
});

server.listen(port, () => console.log(`Server at port ${port}`));