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
import ComediansPage from '../containers/ComediansPage.jsx'

const App = () => (
  <div>
    <div>
      <Navigation />
    </div>
      <Route exact path='/' component={EventPage} />
      <Route path="/comedianprofiles" component={ComediansPage} />
      <Route path="/comediandash" component={ComedianDash} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      
    

  </div>
)

export default App; 



      


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       events: [],
//       word: "Signup"
//     }
//   }

//   insertDB(obj){
//     console.log(obj, "USER OBJ");
//   }

//   render () {
//     return (<div>
//       <Navigation word={this.state.word} handleLoginInput={this.insertDB.bind(this)} />
     

//     </div>)
//   }
// }

/*
    <div className="Navigation">
      <Navbar>
      <Nav className="ml-auto" navbar>
        <navItem>
          <Link to='/login'> Log In </Link>
        </navItem> 
        
      </Nav>
      </Navbar>
    </div>

   <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
*/
