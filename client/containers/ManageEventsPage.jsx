import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import BookedEvents from '../components/BookedEvents.jsx';
import PendingEventsList from '../components/PendingEventsList.jsx';

class ManageEventsPage extends React.Component{
  constructor(props){
  super(props);  
  
  this.state = {
    comedianInfo: this.props.location.state.comedianInfo
  }
  }


  render () {
    return (
     <div> Manage Events
       <PendingEventsList comedianInfo={this.state.comedianInfo}/>  
       <BookedEvents comedianInfo ={this.state.comedianInfo}/> 
     </div>
    )
  }
}

export default ManageEventsPage;