var userNames = function () {
  this.names = [];
}

userNames.prototype.checkIfExist = function (name) {
  if (!name || this.names[name]) {
    return false;
  } else {
    this.names[name] = true; 
    return true; 
  }
}

userNames.prototype.getNewName = function () {
  var name;
  var guestUserCount = 1;

  while (!this.checkIfExist(name)) {
    name = 'Guest' + guestUserCount;
    guestUserCount++;
  }

  return name; 
}

userNames.prototype.getAllNames = function () {
  var allNames = [];
  for (var i=0; i<this.names.length; i++) {
    allNames.push(this.names[i]);
  }
  return allNames;
}

var userNamesObj = new userNames();


//EXPORT as SOCKET
module.exports = function (socket) {
  var name = userNamesObj.getNewName();

  socket.emit('init', {
    name: name,
    users: userNamesObj.getAllNames()
  });

  socket.broadcast.emit('user:join', {
    name: name
  });

  socket.on('send:message', function (data) {
    socket.broadcast.emit('send:message', {
      user: name,
      text: data.text
    });
  });

  socket.on('disconnect', function () {
    socket.broadcast.emit('user:left', {
      name: name
    });
  });
};
