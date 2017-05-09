import React from 'react';

class EventListing extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Name: {this.props.event.name}</div>
        <div>Date: {this.props.event.date}</div>
      </div>
    );
  }
}

export default EventListing;