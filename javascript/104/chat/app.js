const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketIo = require("socket.io")(server);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const chatters = [];
socketIo.on("connection", socket => {
  console.log('server got a connection');

  //socket.emit('message', 'This is a message from the server');

  //socket.on('message', msg => console.log(msg));

  let name;
  socket.on('login', (loginName, callback) => {
    const n = loginName.trim();
    if (!n) {
      callback(`Username is required.`);
    }

    if (chatters.find(c => c.name === n)) {
      callback(`Username ${n} already used. Please choose another.`);
    } else {
      chatter = {
        name: n,
        socket: socket
      };

      let names = chatters.map(c => c.name);
      socket.emit('users', names)
      chatters.push(chatter);
      callback();

      socket.on('message', msg => {
        const m = msg.trim();
        if (m.startsWith('@')) {
          let userName = getFirstWord(m);
          userName = userName.substring(1);
          console.log(userName)
          let directedUser = chatters.filter(c => c.name = userName);
          console.log(directedUser);
          directedUser[0].socket.emit('message',  { author: name, msg: msg })
        }
        else{
          socketIo.emit('message', { author: chatter.name, msg: msg });
        }
      });
    }
  });
});

app.use('/', (req, res, next) => {
  res.send('Hello World!');
});

function getFirstWord(str) {
  let spaceIndex = str.indexOf(' ');
  return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
};

server.listen(80);