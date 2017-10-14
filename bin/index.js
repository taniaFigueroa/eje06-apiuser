//archivo de inicio donde se configura la ruta del http://localhost:3002

const app = require('../server'); //solicita archivo
const server = require('http').Server(app);

const port = 3002

server.listen(port);
console.log(`server is running on port ${port}`);
