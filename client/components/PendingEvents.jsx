import React from 'react';
import $ from 'jquery';

class PendingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingEventList: []
    }
    
    this.getPendingEvent = this.getPendingEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
  }

  componentDidMount() {
    this.getPendingEvent();
  }

  getPendingEvent() {
    var that = this;
    $.get('/getPendingEvents', {"email": this.props.comedianInfo.email})
    .done(data => {
      this.setState({
        pendingEventList: data
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
        <p>{JSON.stringify(this.state.pendingEventList[0])}</p>
      </div>
    );
  }
  
}

export default PendingEvents;
