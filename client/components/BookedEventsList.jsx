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
    $.get('/getBookedEvents', {id: this.props.comedianInfo.id})
    .done(data => {
      console.log('data received', data)
      this.setState({
        bookedEventList: data
      })
    })
  } 

  cancelEvent(){
    console.log('Cancel is clicked');
  }

  render() {
    return (
      <div className="col-sm-6 col-md-4">
        <h3>Booked event details!</h3>
        {this.state.bookedEventList.map( (booked) => <BookedEvent cancel={this.cancelEvent} booked={booked} key={booked.id}/> )} 
      </div>
    );
  }
  
}

export default BookedEvents;
