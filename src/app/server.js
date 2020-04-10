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

function checkIfNameAndAgeExists(req, res, next){ 
    const { name, age } = req.body;
    if(!name || !age){
        return res.status(400).json({ message: 'Name and age are required' });
    }

    return next();
}

function checkIfUserExistsInArray(req, res, next){
    const { id } = req.params;
    const user = users[id];

    if(!user){
        return res.status(404).json({ message: 'User not found'});
    }

    return next();
}

server.get('/users', (req, res) => res.json(users));

server.get('/users/:id', checkIfUserExistsInArray, (req, res) => {
    const { id } = req.params;
    return res.json(users[id]);
});

server.post('/users', checkIfNameAndAgeExists, (req, res) => {
    const { name, age } = req.body;
    users.push({ name, age });
    return res.json(users);
});

server.put('/users/:id', checkIfNameAndAgeExists, checkIfUserExistsInArray, (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    
    users[id] = { name, age };

    return res.status(200).json({ message: 'User updated'});
});

server.delete('/users/:id', checkIfUserExistsInArray, (req, res) => {
    const { id } = req.params;
    users.splice(id, 1);
    return res.status(200).json('User deleted');
});

server.listen(port, () => console.log(`Server at port ${port}`));