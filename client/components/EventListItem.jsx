import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class EventListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={'/'+ this.props.event.id}>{this.props.event.name}</Link>
        {this.props.event.date}
      </div>
    );
  }
}r

export default EventListItem;