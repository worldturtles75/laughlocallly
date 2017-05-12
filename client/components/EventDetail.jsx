import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import EventRegistrationForm from './EventRegistrationForm.jsx';
import ChatBox from './ChatBox.jsx';

class EventDetail extends React.Component {
  constructor ({props}) {
    super(props);
    this.state = {
      event: {}
    }
  }

  // componentDidMount() {
  //   var allEvents = this.props.data;
  //   var currentEvent;
  //   for (var i=0; i<allEvents.length; i++) {
  //     if (Number(allEvents[i].id) === Number(this.props.match.params.id)) {
  //       currentEvent = allEvents[i];
  //     } 
  //   }
  //   this.setState({
  //     event: currentEvent
  //   })
  // }

  render() {
    return (
     <div>
      EventDetail!!! 
      {console.log('this.props.data', this.props.data)}
    </div>

    );
  }
}

export default EventDetail;
      // <EventRegistrationForm eventID={this.props.match.params.id}/>
