// Connect to the server using Socket.IO


socket.on('connect', () => {
  console.log('Connected to your server');
});

socket.on('number', (msg) => {
  console.log('Random number: ' + msg);
});