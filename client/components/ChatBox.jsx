import React from 'react';
var socket = io.connect();

class Message extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <strong>{this.props.name}: </strong> {this.props.text}    
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
            <Message key={i} name={message.name} text={message.text} />
        )} 
      </div>      
    );
  }
}

class MessageForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var message = {
      name : this.state.name,
      text : this.state.text
    }
    console.log('message', message);
    this.props.onMessageSubmit(message);  
    this.setState({ text: '' });
  }

  handleNameInput(e) {
    e.preventDefault();
    this.setState({ name : e.target.value });
  }

  handleTextInput(e) {
    e.preventDefault();
    this.setState({ text : e.target.value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder="Your Name Here" className="form-control" onChange={this.handleNameInput} value={this.state.name} />
        <input type='text' placeholder="Mesg Here" className="form-control" onChange={this.handleTextInput} value={this.state.text} />
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
    this.newMessage = this.newMessage.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  componentDidMount () {
    socket.on('send:message', this.newMessage);
  }

  newMessage (newMessage) {
    var messages = this.state.messages;
    messages.push(newMessage);
    this.setState({
      messages: messages
    })
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
    var oldName = this.state.user;
    socket.emit('change:name', { name : newName}, (result) => {
      if(!result) {
        return alert('There was an error changing your name');
      }
      var {users} = this.state;
      var index = users.indexOf(oldName);
      users.splice(index, 1, newName);
      this.setState({users, user: newName});
    });
  }

  render() {
    return (
      <div className='container'>
        <div className="well well-lg">
          <div className='well well-lg'>
            <MessageList messages={this.state.messages} />
          </div>
          <MessageForm onMessageSubmit={this.handleMessageSubmit}/>
        </div>
      </div>
    );
  }
}

export default ChatBox;