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

userNames.prototype.cleanNames = function (name) {
  if (this.names[name]) {
    delete this.names[name];
  }
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

  socket.on('change:name', function (data, fn) {
    if (userNamesObj.checkIfExist(data.name)) {
      var oldName = name;
      userNamesObj.cleanNames(oldName);

      name = data.name;
      
      socket.broadcast.emit('change:name', {
        oldName: oldName,
        newName: name
      });

      fn(true);
    } else {
      fn(false);
    }
  });


  socket.on('disconnect', function () {
    socket.broadcast.emit('user:left', {
      name: name
    });
    userNamesObj.cleanNames(name);    
  });
};



