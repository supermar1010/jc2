let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let path = require('path');

// Setup routing
require("./src/routes/index.js")(app);

// Serve static content under public
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg.text);
        msg.timestamp = Date.now();
        messages.push(msg);
        io.emit('chat message', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

module.exports = app;