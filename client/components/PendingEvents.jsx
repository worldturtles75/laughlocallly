import React from 'react';
import $ from 'jquery';

class PendingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingEventList: []
    }
    
    this.getEvent = this.getEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
  }

  componentDidMount() {
    // this.getEvent();
  }

  getEvent() {
    var that = this;
    $.get('/getEvent')
    .done(data => {
      this.setState({
        eventListing: data
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
        <p>Pending event details!</p>
      </div>
    );
  }
  
}

export default PendingEvents;
