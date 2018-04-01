import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class Nav extends Component {
  render() {
  let el= !this.props.connected ? (<ul>
    <li>
      <NavItem href="/login">Sign In</NavItem>
    </li>
    <li>
      <NavItem href="/signup">Sign Up</NavItem>
    </li>
  </ul>) : (<ul>
    <li>
      <NavItem  href="/profile">{this.props.user.firstname+' '+this.props.user.lastname} </NavItem>
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
