import React from 'react';
import $ from 'jquery';
import EventListItem from './EventListItem.jsx';
import EventDetail from './EventDetail.jsx';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class EventList extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <h2>Upcoming Events:</h2>
            <ul>
              {this.props.data.map( (event) => <EventListItem event={event} key={event.name}/> )}           
            </ul>

            <Route path="/:id" component={EventDetail}/>
          </div>
        </Router>
      </div>

    );
  }
}

export default EventList;