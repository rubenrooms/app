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

router.post('/', function (req, res) {
  res.sendFile('counter.html', { root: 'public' });
  let count = req.body.counter;
  io.emit("counter", count);
  console.log(count);
  
});

io.on("connection", (socket) => {
  console.log('new connection');

  socket.on("disconnect", () => {
    console.log('disconnected')
  });

});

io.listen(8888, () => {
  console.log('startennnn');
});

module.exports = router;
