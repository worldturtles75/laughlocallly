import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import BookedEvents from '../components/BookedEvents.jsx';
import PendingEvents from '../components/PendingEvents.jsx';

class ManageEventsPage extends React.Component{
  constructor(props){
  super(props);  
  
  this.state = {}
  }


  render () {
    return (
     <div> Manage Events 
       <PendingEvents />
       <BookedEvents />
     </div>

      )
  }

}

export default ManageEventsPage;