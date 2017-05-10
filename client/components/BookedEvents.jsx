import React from 'react';
import $ from 'jquery';

class BookedEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedEvents: []
    }
    
    this.getEvent = this.getEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
  }

  componentDidMount() {
    this.getEvent();
  }

  getEvent() {
    $.get('/getEvents')
    .done(data => {
      console.log('data received', data)
      this.setState({
        bookedEvents: data
      })
    })
  }

  editEvent() {
    // make an api call to db
    $.ajax({
      url: '/edit',
      type: 'PUT',
      success: (data) => {
        // doing a put request 
        // probably call and post to method on that event
      },
      error: (data) => {
        console.error(`Major Errors are occuring with PUT: ${data}`);
      }
    });
  }

  render() {
    return (
      <div>
        <p>Booked event details!</p>
        {console.log(this.state.bookedevents)}
      </div>
    );
  }
  
}

export default BookedEvents;
