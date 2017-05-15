import React from 'react';
import $ from 'jquery';
import BookedEvent from './BookedEvent.jsx';

class BookedEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedEventList: []
    }
    
    this.getBookedEvents = this.getBookedEvents.bind(this);
    this.cancelEvent = this.cancelEvent.bind(this);
  }

  componentDidMount() {
    this.getBookedEvents();
  }

  getBookedEvents() {
    $.get('/getBookedEvents', {id: this.props.comedianInfo.id + 1})
    .done(data => {
      console.log('data received', data);
      this.setState({
        bookedEventList: data
      })
    })
  } 

 cancelEvent(eventName) {
    const bookedList = this.state.bookedEventList;
    const eventPos = bookedList.map(event => event.name).indexOf(eventName);
    console.log('Deny Event id', eventPos);
    $.get('updateStatusToOpen', {id: bookedList[eventPos].id})
    .done(data => {
      console.log('Success while denying data event to book', data);
    })
    .fail(err => {
      console.error('Error in cancelEvent', err);
    })
  }

  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <h3>Booked event details!</h3>
        {this.state.bookedEventList.length ? this.state.bookedEventList.map( (booked) => <BookedEvent cancel={this.cancelEvent} booked={booked} key={booked.id}/> ) : <h3>No Events Are Booked</h3>} 
      </div>
    );
  }
  
}

export default BookedEvents;
