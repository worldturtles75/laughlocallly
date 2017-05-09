import React from 'react';
import $ from 'jquery';
import EventListing from './EventListing.jsx';


class EventList extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Event List</h2>
        {this.props.data.map( (event) => <EventListing event={event} key={event.name}/> )}           
      </div>
    );
  }
}

export default EventList;