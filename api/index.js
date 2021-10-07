const express = require('express');
const routes = require('./routes');

const server = express();
server.use(express.json());

const port = 3003;

routes(server);
server.listen(port, () => console.log(`servidor esta rodando na porta ${port}`));
