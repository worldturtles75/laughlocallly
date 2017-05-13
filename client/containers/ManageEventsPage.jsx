import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import BookedEvents from '../components/BookedEvents.jsx';
import PendingEvents from '../components/PendingEvents.jsx';

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
       <PendingEvents comedianInfo={this.state.comedianInfo}/>  
       <BookedEvents comedianInfo ={this.state.comedianInfo}/> 
     </div>
    )
  }
}

export default ManageEventsPage;