import React from 'react';

class VenueListing extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>id: {this.props.venue.id}</div>
        <div>Address: {this.props.venue.address}</div>
      </div>
    );
  }
}

export default VenueListing;