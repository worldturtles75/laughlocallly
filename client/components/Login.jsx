import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

class Login extends React.Component {
 constructor(props){
  super(props);  
    this.state = {
      username: "",
      password: ""
    }
  }
 
  render () {
    return (
      <div>
      <Form>
        <FormGroup>
          <Input type="text" name="username" placeholder="username" />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="password" />
        </FormGroup>
      </Form>
      </div>
        

    )
  }

}

export default Login;