const { count } = require('console');
var express = require('express');
var router = express.Router();
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require("socket.io")(server);

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
  });

});

server.listen(8888, () => {
  console.log('startennnn');
});

module.exports = router;
