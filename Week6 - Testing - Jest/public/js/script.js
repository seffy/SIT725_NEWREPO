const socket = io('http://localhost:8080');
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');

// Real-time updates
socket.on('message-added', (message) => {
  renderMessage(message); // Prepend the new message
  fetchMessages();
  window.scrollTo(0, document.body.scrollHeight);
});

/*
socket.on('messages-updated', (messages) => {
  updateMessagesUI(messages); // Your UI refresh logic
  fetchMessages(); // Refresh all messages
});
*/

socket.on('messages-updated', (sortedMessages) => {
  fetchMessages();

  messagesDiv.innerHTML = ''; // Clear the current list

});

socket.on('message-deleted', () => {
  fetchMessages(); // Refresh all messages
  window.scrollTo(0, document.body.scrollHeight);
});

$(document).ready(function(){
  $('.modal').modal();

    // Close modal on submit button click
    $('#submit-button').click(function() {
      $('#modal1').modal('close'); // Replace 'modal-id' with the ID of your modal
    });

  // Close modal on submit button click
  $('#modal-close').click(function() {
    $('#modal1').modal('close'); // Replace 'modal-id' with the ID of your modal
  });


});
