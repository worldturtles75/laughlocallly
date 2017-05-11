import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field'
// import LoginForm from './LoginForm.jsx';
import { Link } from 'react-router-dom';
import { hashPassword, createSalt, compareHash } from '../../server/hashUtils.js';
import $ from 'jquery';


class SignupPage extends React.Component{
  constructor(props){
  super(props);  
  
  this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        website: "",
        phone: "",
        twitter: "",
        photo_url: "",
        bio: ""
      }
  }

  this.handleUserInput = this.handleUserInput.bind(this);
  this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
  
  }

  handleSignupSubmit(e){
    e.preventDefault();
    var user=this.state.user; 
    user.salt = createSalt();
    var hash = hashPassword(user.password, user.salt)
    user.password = hash;
    var context = this;
    $.ajax({
      url: '/signup',
      type: 'POST',
      data: user,
      success: function(data) {
        if (!data) {
          alert('There is already an email associated with this account. Please click on the log-in tab to sign-in');
          // context.props.history.push('/login');
        } else {
          alert('Successful sign-up!');
          context.props.history.push('/');
        }
      },
      error: function(error) {
        console.error('failed to send', error);
      }
    })
  }

  handleUserInput(e){
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value; 
    this.setState({user});
  }

  render () {
    return (
      <Card className="container">
        <form action="/" onSubmit={this.handleSignupSubmit}>
          <h2 className="card-heading"> Comedian Sign Up </h2>

          <div className="field-line">
            <TextField floatingLabelText="Name" name="name" onChange={this.handleUserInput} value={this.state.user.name} />
          </div>

          <div className="field-line">
            <TextField floatingLabelText="Email" name="email" onChange={this.handleUserInput} value={this.state.user.email} />
          </div>

          <div className="field-line">
            <PasswordField floatingLabelText="Create a Password" name="password" onChange={this.handleUserInput} value={this.state.user.password} />
          </div>

          <div className="field-line">
            <TextField floatingLabelText="Website" name="website" onChange={this.handleUserInput} value={this.state.user.website} />
          </div>

          <div className="field-line">
            <TextField floatingLabelText="Bio" name="bio" onChange={this.handleUserInput} value={this.state.user.bio} />
          </div>

          <div className="field-line">
            <TextField floatingLabelText="Twitter" name="twitter" onChange={this.handleUserInput} value={this.state.user.twitter} />
          </div>

          <div className="field-line">
            <TextField floatingLabelText="Link to a Photo of Yourself" name="photo_url" onChange={this.handleUserInput} value={this.state.user.photo_url} />
          </div>

          <div className="field-line">
            <TextField floatingLabelText="Phone Number" name="phone" onChange={this.handleUserInput} value={this.state.user.phone} />
          </div>

          <div className="bottom-line">
            <RaisedButton type="submit" label="Create New Account" primary />
          </div>

          <CardText> Already have an account? <Link to='/login'> Log in </Link> </CardText>
        </form>
      </Card>  

      )
  }

}

export default SignupPage;