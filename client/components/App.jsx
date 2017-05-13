import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import $ from 'jquery';
// import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import Navigation from './Nav.jsx';
import EventPage from './EventPage.jsx';
import ComedianDash from '../containers/ComedianDash.jsx'
import ComedianList from './ComedianList.jsx';
import ComedianProfile from '../containers/ComedianProfile.jsx'
import BookPage from '../containers/BookPage.jsx';
 
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      comedians: []
    }
  }

  componentWillMount(){
    var context=this;
    $.get('/getComedians')
     .done(function(data){
        // console.log(data, 'COMEDIAN DATA');
        context.setState({comedians: data});
     })
     .fail(function(err){
        console.error(err, "ERROR RECEIVING INFO")
     })
  }
  
  render () {
    return (

      <div>
      <div>
        <Navigation />
      </div>
        <Route exact path='/' component={EventPage} />
        <Route path="/comedianprofiles" component={(props) => <ComedianList comedians={this.state.comedians}{...props} />} />
        <Route path="/comediandash" component={ComedianDash} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/book" component={BookPage} />
        <Route 
        path="/profile/:name" 
        component={(props) => {
            // console.log(props);
            const profiles = this.state.comedians.filter((comedian) => props.match.params.name === comedian.name);
            // console.log(profiles[0]);
            return <ComedianProfile comedian={profiles[0]} {...props} />
      }}/>

        
      

    </div>
    )
  }
}

export default App; 



      


