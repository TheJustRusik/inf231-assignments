const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Handle incoming messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    
    socket.on('username', (username) => {
        // You can store the username or perform additional authentication here
        console.log(`User ${username} connected`);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
