import React from 'react';

class BookedEvent extends React.Component {
  constructor (props) {
    super(props);

    this.state = {}

  }

  render() {
    console.log('booked props', this.props.booked)
    return (
      <div className="thumbnail">
        <div>Name: {this.props.booked.name}</div>
        <div>Date: {this.props.booked.date}</div>
        <div>Detail: <img src={this.props.booked.photo_url}/> </div>
        <button onClick={() => this.props.cancel()}>Cancel</button>
      </div>
    );
  }
}

export default BookedEvent;