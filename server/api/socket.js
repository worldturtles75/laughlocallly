//export as socket
module.exports = function (socket) {
  socket.on('send:message', function (data) {
    socket.broadcast.emit('send:message', {
      name: data.name,
      text: data.text
    });
  });
};


