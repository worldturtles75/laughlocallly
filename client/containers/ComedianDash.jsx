import React, { PropTypes } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import BookVenuePage from './BookVenuePage.jsx';
import ManageEventsPage from './ManageEventsPage.jsx';

class ComedianDash extends React.Component{
  constructor(props){
    super(props);  
  
    this.state = {
      comedianInfo: this.props.location.state.comedianInfo
    }
  }

  render () {
    return (
      <BrowserRouter>
       <div className="container"> 
          <nav className="navbar navbar-lower comedianNav">
            <div className="navbar-header">
              <a className="navbar-brand navbar-left" href="/"> Welcome, {this.state.comedianInfo.name}! </a>
            </div>
            <div className="container-fluid navbar-right">
              <ul className="nav navbar-nav">
                <li> <Link to="/editcomedianprofile"> Edit Profile </Link> </li>   
                <li> <Link to="/bookvenue"> Open Gigs </Link> </li>      
                <li> <Link 
                        to={{
                          pathname: "/manageevents",
                          state: {comedianInfo: this.state.comedianInfo}
                        }}
                      > Manage Events </Link> </li>
              </ul>
            </div>
          </nav>
        
        
        <Route path="/bookvenue" component={BookVenuePage} />
        <Route path="/manageevents" component={ManageEventsPage} />

     
      </div>
      </BrowserRouter>

      )
  }

}

export default ComedianDash;