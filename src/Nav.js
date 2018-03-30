import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'
import './App.css';
import './index.css';

class Nav extends Component {
  render() {
    return (
<Navbar class="nav" brand='logo' right>
    <ul>
      <li>
        <NavItem href="Login.js">Sign In</NavItem>
      </li>
      <li>
        <NavItem href="signup.js">Sign Up</NavItem>
      </li>
    </ul>
</Navbar>
)}
}

export default Nav;
