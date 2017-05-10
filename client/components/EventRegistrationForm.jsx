import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field';

class EventRegistrationForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      audience: {
        name: "",
        email: "",
        phone: "",
        id_events: ""
      }
    }
    this.handleAudienceInput = this.handleAudienceInput.bind(this);
    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
  }

  handleRegistrationSubmit(e){
    e.preventDefault();
    const audience=this.state.audience; 
    console.log({email: audience.email, name: audience.name, phone: audience.phone, id: audience.id_events});
    $.post('/audienceRegistration', audience)
      .done(function (data) {
        console.log('Sucessfully Registered');
      })
    this.setState({
      audience: {
        name: "",
        email: "",
        phone: "",
        id_events: ""
      }
    })    
  }

  handleAudienceInput(e){
    const field = e.target.name;
    const audience = this.state.audience;
    audience[field] = e.target.value; 
    audience['id_events'] = Number(this.props.eventID);
    this.setState({audience});
  }

  render() {
    return (
     <div>
      <Card className="container">
        <form action="/" onSubmit={this.handleRegistrationSubmit}>
          <h2 className="card-heading"> Event Registration: Event ID {this.props.eventID}</h2>

          <div className="field-line">
            <TextField floatingLabelText="Name" name="name" onChange={this.handleAudienceInput} value={this.state.audience.name} />
          </div>

          <div className="field-line">
            <TextField floatingLabelText="Email" name="email" onChange={this.handleAudienceInput} value={this.state.audience.email} />
          </div>

          <div className="field-line">
            <TextField floatingLabelText="Phone Number" name="phone" onChange={this.handleAudienceInput} value={this.state.audience.phone} />
          </div>

          <div className="bottom-line">
            <RaisedButton type="submit" label="Register" primary />
          </div>
        </form>
      </Card> 
    </div>

    );
  }
}

export default EventRegistrationForm;