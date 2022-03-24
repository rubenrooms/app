const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require("socket.io")(server);


app.get("/", function(req, res) {
    res.sendFile(
        path.join(__dirname, "/../public/counter.html")
    );
  });

io.on("connection", (socket) => {
    console.log('new connection');
});

server.listen(8888, () => {
    console.log('startennnn');
});
