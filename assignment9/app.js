const username = prompt('Enter your username:');
const socket = io();

// Emit the username to the server
socket.emit('username', username);

document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    // Emit the message to the server
    socket.emit('chat message', { username, message });

    // Clear the input field
    messageInput.value = '';
});

// Listen for incoming messages
socket.on('chat message', (msg) => {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    
    // Include timestamp
    const timestamp = new Date().toLocaleTimeString();
    messageElement.textContent = `[${timestamp}] ${msg.username}: ${msg.message}`;

    chatMessages.appendChild(messageElement);
});