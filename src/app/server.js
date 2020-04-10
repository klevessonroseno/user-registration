const express = require('express');
const port = 8000;
const server = express();

server.use(express.json());

server.listen(port, () => console.log(`Server at port ${port}`));