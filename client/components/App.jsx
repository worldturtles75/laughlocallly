import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import $ from 'jquery';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
// import Navigation from './Nav.jsx';
// import Events from './Events.jsx';

const App = () => (
  <div>
    <Router>
      <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
      </div>
    </Router>
    <Link to='/login'> Log In </Link>
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
