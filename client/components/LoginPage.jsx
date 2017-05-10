import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field';
import {hashPassword, compareHash} from '../../server/hashUtils.js';
import $ from 'jquery';
// import LoginForm from './LoginForm.jsx';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component{
  constructor(props){
  super(props);  
  
  this.state = {
      email: "",
      password: ""
  }

  this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  this.handleUsernameInput = this.handleUsernameInput.bind(this);
  this.handlePasswordInput = this.handlePasswordInput.bind(this);

  }

  handleLoginSubmit(e){
    e.preventDefault();
    var enteredPassword = this.state.password;
    $.ajax({
      url: '/loginCheck',
      type: 'POST',
      data: this.state,
      success: function(data) {
        if (data.length < 1) {
          console.log('invalid username')
          return;
        }
        var oldPassword = data[0].password;
        var salt = data[0].salt;
        if (compareHash(enteredPassword, oldPassword, salt)) {
          console.log('correct password');
        } else {
          console.log('incorrect password');
        }
      },
      error: function(error) {
        console.error('failed to send', error);
      }
    })
  }

  handleUsernameInput(e){
    this.setState({email: e.target.value});
  }

  handlePasswordInput(e){
    this.setState({password: e.target.value})
  }

  render () {
    return (
      <Card className="container">
        <form action="/" onSubmit={this.handleLoginSubmit}>
          <h2 className="card-heading"> Login </h2>

          <div className="field-line">
            <TextField floatingLabelText="Email" name="email" onChange={this.handleUsernameInput} value={this.state.email} />
          </div>

          <div className="field-line">
            <PasswordField floatingLabelText="Password" name="password" onChange={this.handlePasswordInput} value={this.state.password} />
          </div>

          <div className="bottom-line">
            <RaisedButton type="submit" label="Log In" primary />
          </div>

          <CardText> Don't have an account? <Link to='/signup'> Create one </Link> </CardText>
        </form>
      </Card>  

      )
  }

}

export default LoginPage;