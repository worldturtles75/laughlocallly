import React from 'react';
import $ from 'jquery';
import VenueListing from './VenueListing.jsx';


class VenuesList extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Venues List</h2>
        {this.props.data.map( (venue) => <VenueListing venue={venue} key={venue.id}/> )}           
      </div>
    );
  }
}

export default VenuesList;