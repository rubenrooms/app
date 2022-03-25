const { count } = require('console');
var express = require('express');
var router = express.Router();
const app = express();
const path = require('path');
const http = require('http');

const Server = require('socket.io');

const httpServer = http.createServer();
const io = new Server.Server(httpServer, {
  cors: {
    origin: "http://localhost:3901"
  }
});

/* GET home page. */
app.get('/', function(req, res, next) {
  res.sendFile('counter.html', { root: 'public' });
});

io.on("connection", (socket) => {
  console.log('new connection');
  socket.on("disconnect", () => {
    console.log('disconnected')
  });

  socket.on("counter", count => {
    io.emit("counter", count);
    console.log("hey");
  });

});

io.listen(8888, () => {
  console.log('startennnn');
});

module.exports = router;
