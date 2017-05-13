import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

class BookPage extends React.Component{
  constructor(props){
  super(props);  
  
  this.state = {}
  }


  render () {
    return (
     <div> Book Venue 
     <p>{this.props.location.state.comedian} </p>
     </div>
      )
  }

}

export default BookPage;