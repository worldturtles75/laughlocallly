import React from 'react';
import $ from 'jquery';
import EventList from './EventList.jsx';
import ChatBox from './ChatBox.jsx';

import { Link } from 'react-router-dom';

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      allEvents: [],
    }
    this.fetch = this.fetch.bind(this);    
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var that = this;
    $.get('/getAllEventsForEventPage')
    .done(function (data){
      // console.log('data', data);
      that.setState({
        allEvents: data
      })
    })
  }

  render () {
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1>Welcome!</h1>
          <p>Please register for upcoming events. Leave a message in the live chat below!</p>
          <p> 
            <Link to="/chatBox" className="btn btn-success btn-lg" role="button"> Live Event: Chat Now!</Link>
          </p>
        </div>

        <EventList data={this.state.allEvents}/>
      </div>
  )}
}

export default EventPage;

