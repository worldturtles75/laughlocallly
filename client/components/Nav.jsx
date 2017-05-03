import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

var Navigation = ({word}) => (
  <div className="Navigation">
    <Navbar>
    <NavbarBrand>{word}</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <navItem>
        <Signup word={word} />
      </navItem> 
      <navItem>
        <Login word={word} />
      </navItem>
       
      
    </Nav>
    </Navbar>
  </div>
);



  



export default Navigation; 


// <div className="col-md-6 col-md-offset-3">

// </div>

  


  // <nav className="navbar">
  //   <div className="col-md-6 col-md-offset-3">
  //     <a className="navbar-brand">{word}</a>
  //   </div>
  // </nav>

   
