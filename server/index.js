require('dotenv/config');
const path = require('path');
const client = require("./connection");
const express = require('express');
// const companies = require('./companies');

const server = express();
let PORT = process.env.PORT;

client.connect();

client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});

// server.use('/api/companies', companies);
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'An unexpected error has occurred'
  });

});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('its listening closely', PORT);
});
