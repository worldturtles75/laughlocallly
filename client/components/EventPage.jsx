import React from 'react';
import $ from 'jquery';
import EventList from './EventList.jsx';
import ChatBox from './ChatBox.jsx';

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
    $.get('/getEvents')
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
          <p>Please select event below. Leave a message in the live chat below!</p>
        </div>

        <EventList data={this.state.allEvents}/>
        <ChatBox />             
      </div>
  )}
}

export default EventPage;

