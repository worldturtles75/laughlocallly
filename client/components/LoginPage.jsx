import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field'

// import LoginForm from './LoginForm.jsx';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component{
  constructor(props){
  super(props);  
  
  this.state = {
      email: "",
      password: ""
  }

  }

  handleLoginSubmit(e){
    e.preventDefault();
    console.log({email: this.state.email, password: this.state.password})
    
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
        <form action="/" onSubmit={this.handleLoginSubmit.bind(this)}>
          <h2 className="card-heading"> Login </h2>

          <div className="field-line">
            <TextField floatingLabelText="Email" name="email" onChange={this.handleUsernameInput.bind(this)} value={this.state.email} />
          </div>

          <div className="field-line">
            <PasswordField floatingLabelText="Password" name="password" onChange={this.handlePasswordInput.bind(this)} value={this.state.password} />
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