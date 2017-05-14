import React from 'react';
import $ from 'jquery';

var socket = io.connect();

class UsersList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h4> People Online! </h4>
        <ul>{ this.props.users.map( (user, i) => <li key={i}> {user} </li>  ) }</ul>       
      </div>      
    );
  }
}

class Message extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <strong>{this.props.user}: </strong> {this.props.text}    
      </div>      
    );
  }
}

class MessageList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h4> Conversation: </h4>
        {this.props.messages.map((message, i) => 
            <Message key={i} user={message.user} text={message.text} />
        )} 
      </div>      
    );
  }
}


class MessageInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var message = {
      user : this.props.user,
      text : this.state.text
    }
    this.props.onMessageSubmit(message);  
    this.setState({ text: '' });
  }

  handleTextInput(e) {
    this.setState({ text : e.target.value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="col-sm-10">
          <input type='text' placeholder="Mesg Here" name="mesg" className="form-control" onChange={this.handleTextInput} value={this.state.text} />
        </div>
        <button type="submit" className="btn-sm btn-primary">Submit</button>
      </form>
    );
  }
}

var ChangeNameForm = React.createClass({
  getInitialState() {
    return {newName: ''};
  },

  onKey(e) {
    this.setState({ newName : e.target.value });
  },

  handleSubmit(e) {
    e.preventDefault();
    var newName = this.state.newName;
    this.props.onChangeName(newName); 
    this.setState({ newName: '' });
  },

  render() {
    return(
      <div className='change_name_form'>
        <h4> Enter Your Name </h4>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.onKey}
            value={this.state.newName} 
          />
        </form> 
      </div>
    );
  }
});

class ChatBox extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      users: [],
      messages: [],
      text: ''
    }
    this.init = this.init.bind(this);
    this.newMessage = this.newMessage.bind(this);
    this.userJoined = this.userJoined.bind(this);
    this.userLeft = this.userLeft.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  componentDidMount () {
    socket.on('init', this.init);
    socket.on('send:message', this.newMessage);
    socket.on('user:join', this.userJoined);
    socket.on('user:left', this.userLeft);
    socket.on('change:name', this.handleChangeName);    
  }

  init (data) {
    this.setState({
      users: data.users,
      currentUser: data.name
    })
  }

  newMessage (newMessage) {
    var messages = this.state.messages;
    messages.push(newMessage);
    this.setState({
      messages: messages
    })
  }

  userJoined (data) {
    var newUser = data.name;
    var users = this.state.users;
    var messages = this.state.messages;
    users.push(newUser);
    messages.push({
      user: 'ROOM ANNOUCEMENT',
      text : newUser +'has joined!'
    });
    this.setState({
      users: users,
      messages: messages
    });    
  }  

  userLeft (data) {
    var leftUser = data.name;
    var users = this.state.users;
    var messages = this.state.messages;
    users.splice(users.indexOf(leftUser), 1);
    messages.push({
      user: 'ROOM ANNOUCEMENT',
      text : leftUser +'has left!'
    });
    this.setState({
      users: users,
      messages: messages
    });  
  }

  handleMessageSubmit(newMessage) {
    var messages = this.state.messages;
    messages.push(newMessage);
    this.setState({
      messages: messages
    })
    socket.emit('send:message', newMessage);
  }

  handleChangeName(newName) {
    var oldName = this.state.currentUser;
    socket.emit('change:name', { name : newName}, (result) => {
      if(!result) {
        return alert('There was an error changing your name');
      }
      var users = this.state.users;
      var index = users.indexOf(oldName);
      users.splice(index, 1, newName);
      this.setState({
        users: users,
        currentUser: newName
      })      
    });
  }  

  render() {
    return (
      <div className='container'>
        <div className="well well-lg">
          <ChangeNameForm onChangeName={this.handleChangeName} />
          <div className="row">
            <div className="col-md-8">
              <div className='well well-lg'>
                <MessageList messages={this.state.messages} />
              </div>
            </div>
            <div className="col-md-4">
              <UsersList users={this.state.users} />
            </div>
          </div>
          <MessageInput onMessageSubmit={this.handleMessageSubmit} user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default ChatBox;

