import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import {hashPassword, compareHash} from '../../server/hashUtils.js';

class Login extends React.Component {
 constructor(props){
  super(props);  
    this.state = {
      username: "",
      password: ""
    }
  this.handleChangeUsername = this.handleChangeUsername.bind(this);
  this.handleChangePassword = this.handleChangePassword.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value, 
      // password: event.target.value
    })
  }
  handleChangePassword(event) {
    console.log(event.target.value)
    this.setState({
      password: event.target.value, 
      // password: event.target.value
    })
  }
  handleSubmit(event) {
    console.log('a password/username was submitted: ' + this.state.username)
    event.preventDefault();
    //we're going to make a jquey ajax call to server, '/getComedian', grab 
    //comedian's salt, hash password. asynchonous.
    hashPassword(this.state.password);
  }
  render () {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChangeUsername} required/>
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChangePassword} required/>
        </FormGroup>
        <Button> Submit </Button>
      </Form>
      </div>
        

    )
  }

}

export default Login;