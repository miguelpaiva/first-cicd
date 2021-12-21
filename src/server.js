const express = require('express');
const { sayHello } = require('./services/hello');

const server = express();

server.get('/', (req, res) => {
  const hello = sayHello();
  res.send(hello);
});

server.listen(9999, () => {
  console.log('Running back-end on port 9999');
});
