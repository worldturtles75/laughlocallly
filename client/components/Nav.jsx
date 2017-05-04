import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
// import Login from './Login.jsx';
// import Signup from './Signup.jsx';

var Navigation = () => (
  <div className="Navigation">
    <Navbar>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link to="/login"> Log In </Link>
      </NavItem> 
      
    </Nav>
    </Navbar>
  </div>
);


export default Navigation; 





// var Navigation = ({handleLoginInput, word}) => (
//   <div className="Navigation">
//     <Navbar>
//     <Nav className="ml-auto" navbar>
//       <navItem>
//         <Signup word={word} />
//       </navItem> 
//       <navItem>
//         <Login handleLoginInput={handleLoginInput} />
//       </navItem>
       
      
//     </Nav>
//     </Navbar>
//   </div>
// );

