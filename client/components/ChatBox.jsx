import React from 'react';
import $ from 'jquery';


const io = require('socket.io-client')
const socket = io()

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
  }

  componentDidMount () {
    socket.on('init', this.init);
    socket.on('send:message', this.newMessage);
    socket.on('user:join', this.userJoined);
    socket.on('user:left', this.userLeft);
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

  render() {
    return (
      <div className="well well-lg">
        <div className="row">
          <div className="col-md-8">
            <MessageList messages={this.state.messages} />
          </div>
          <div className="col-md-4">
            <UsersList users={this.state.users} />
          </div>
        </div>
        <MessageInput onMessageSubmit={this.handleMessageSubmit} user={this.state.user} />
      </div>
    );
  }
}

export default ChatBox;

