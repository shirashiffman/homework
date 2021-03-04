(function () {
  const socketIo = io();



  //socketIo.emit('message', 'This is a message from the client');
  const loginForm = $('#loginForm');
  loginForm.submit(e => {
    e.preventDefault();

    socketIo.emit('login', $('#name').val(), callbackData => {
      if(callbackData) {
        $('#error').text(callbackData);
      } else {
        loginForm.slideUp();
        $('#messagesContainer').slideDown();
      }
    });
  });

  const messageInput = $('#message');
  $('#messageForm').submit(e => {
    e.preventDefault();
    const msg = messageInput.val().trim();
    if (msg) {
      socketIo.emit('message', messageInput.val());
    }
  });

  const messagesElem = $('#messages');
  socketIo.on('users', names => {
    names.map(name => `<div>${name}</div><br>`)
    if(names.length){
      messagesElem.append("Current Users<br>");
      messagesElem.append(names);
    }
    else{
      messagesElem.append("You are the first user");
    }

    
  });
  socketIo.on('message', msg => {
    messagesElem.append(`<div>${msg.author} wrote: ${msg.msg}</div>`);
  });
}());