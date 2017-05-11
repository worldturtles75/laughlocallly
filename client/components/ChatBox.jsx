import React from 'react';
import $ from 'jquery';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const io = require('socket.io-client')
const socket = io()

class UsersList extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h3> People Online! </h3>
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
        <h3> Conversation: </h3>
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
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <div className="field-line">
            <textarea onChange={this.handleTextInput} value={this.state.text} placeholder='Your mesg here'> </textarea>
          </div>

          <div className="bottom-line">
            <RaisedButton type="submit" label="Submit Mesg" primary />
          </div>
        </form>
      </div>
    );
  }
}
// <input type='text' onChange={this.handleTextInput} value={this.state.text} placeholder='Your mesg here'/>

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
      <div>
      <Card className="container">      
        <UsersList users={this.state.users} />
        <MessageList messages={this.state.messages} />
        <MessageInput onMessageSubmit={this.handleMessageSubmit} user={this.state.user} />
      </Card>         
      </div>
    );
  }
}

export default ChatBox;

