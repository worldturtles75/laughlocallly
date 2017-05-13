import React, { PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import OpenGigsPage from './OpenGigsPage.jsx';
import ManageEventsPage from './ManageEventsPage.jsx';

class ComedianDash extends React.Component{
  constructor(props){
  super(props);  
  
  this.state = {}
  }

  render () {
    return (
      <BrowserRouter>
       <div className="container">
          <nav className="navbar navbar-lower comedianNav">
            <div className="navbar-header">
              <a className="navbar-brand navbar-left" href="/"> Welcome, "USERNAME" </a>
            </div>
            <div className="container-fluid navbar-right">
              <ul className="nav navbar-nav">
                <li> <Link to="/editcomedianprofile"> Edit Profile </Link> </li>   
                <li> <Link to="/opengigs"> Open Gigs </Link> </li>      
                <li> <Link to="/manageevents"> Manage Events </Link> </li>
              </ul>
            </div>
          </nav>
        
        
        <Route path="/opengigs" component={OpenGigsPage} />
        <Route path="/manageevents" component={ManageEventsPage} />

     
      </div>
      </BrowserRouter>

      )
  }

}

export default ComedianDash;