import React, { Component } from 'react';
import {Navbar, NavItem,Modal,Button} from 'react-materialize';
import Login from './Login';
import './nav.css';
class Nav extends Component {
  constructor(props){
    super(props);
    this.state={
      connected:this.props.connected
    }
    this.logout=this.logout.bind(this);

  }
  logout(props){
    this.props.logout();
  }
  render() {
  let el= !this.props.connected ? (<ul>
    <li>
      <NavItem><Modal id='loginModal'
      header={'login'}
      trigger={<Button>login</Button>}>
      <Login login={this.props.login} />
    </Modal></NavItem>
    </li>
    <li>
      <NavItem class="sign-up" href="/signup">Sign Up</NavItem>
    </li>
  </ul>) : (<ul>
    <li>
      <NavItem  href="/profile">{this.props.user.firstname+' '+this.props.user.lastname} </NavItem>
    </li>
    <li>
      <NavItem href="/posts">Posts</NavItem>
    </li>
    <li>
      <NavItem  onClick={this.logout}>logout</NavItem>
    </li>
  </ul>)
    return (
<Navbar fixed={true} href='/profile' className="nav" brand={this.props.connected ? <img src={ this.props.user.img ? this.props.user.img :'https://thevoicefinder.com/wp-content/themes/the-voice-finder/images/default-img.png'} className='navlogo'/> : 'lool' } right>
  {el}
</Navbar>

)}
}

export default Nav;
