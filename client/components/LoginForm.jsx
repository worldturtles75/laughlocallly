import React, {PropTypes} from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class LoginForm extends React.Component {
 constructor(props){
  super(props);  
    this.state = {
      username: "",
      password: ""
    }
  }

  handleLoginSubmit(e){
    e.preventDefault();
    this.props.handleLoginInput({username: this.state.username, password: this.state.password});
  }

  handleUsernameInput(e){
    this.setState({username: e.target.value});
  }

  handlePasswordInput(e){
    this.setState({password: e.target.value})
  }
 
  render () {
    return (
      <div>
      <Form onSubmit={this.handleLoginSubmit.bind(this)}>
        <FormGroup>
          <Input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleUsernameInput.bind(this)}/>
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordInput.bind(this)}/>
        </FormGroup>
        <Button> Log In </Button>
      </Form>
      </div>
        

    )
  }

}

export default LoginForm;