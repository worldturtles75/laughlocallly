import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EventRegistrationForm from './EventRegistrationForm.jsx';

class EventDetail extends React.Component {
  constructor ({props}) {
    super(props);
    this.state = {
      event: {}
    }
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    var that = this;
    $.get('/getEventInfo', {id: this.props.match.params.id})
    .done(function (data){
      console.log('hello')
      console.log('data', data);
      // that.setState({
      //   event: data
      // });      
    })    
  }

  fetch() {
  }

  render() {
    return (
     <div>
      <div>Socket io chat box goes here</div>
      <EventRegistrationForm eventID={this.props.match.params.id}/>
    </div>

    );
  }
}

export default EventDetail;