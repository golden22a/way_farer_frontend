import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './nav.css';

class Nav extends Component {
  render() {
  let el= !this.props.connected ? (<ul>
    <li>
      <NavItem class="log-in" href="/login">Log In</NavItem>
    </li>
    <li>
      <NavItem class="sign-up" href="/signup">Sign Up</NavItem>
    </li>
  </ul>) : (<ul>
    <li>
      <NavItem  href="/profile">{this.props.user.firstname} </NavItem>
    </li>
    <li>
      <NavItem href="/posts">Posts</NavItem>
    </li>
  </ul>)
    return (
<Navbar class="nav" brand='logo' right>
  {el}
</Navbar>
)}
}

export default Nav;
