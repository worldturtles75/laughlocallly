import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

class Login extends React.Component {
 constructor(props){
  super(props);  
    this.state = {
      username: "",
      password: ""
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.username, 
      password: event.target.password
    })
  }
  handleSubmit(event) {
    console.log('a password/username was submitted: ' + this.state.username)
    event.preventDefault();
  }
  render () {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Input type="text" name="username" placeholder="username" value={this.state.username} required/>
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="password" value={this.state.password} required/>
        </FormGroup>
      </Form>
      </div>
        

    )
  }

}

export default Login;