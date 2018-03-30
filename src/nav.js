import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize'
import './App.css';

<Navbar brand='logo' right>
        <a className="hamburger" href="">
          <i className="fa fa-bars" />
        </a>
        <NavItem href='signin.html'>Sign In</NavItem>
        <NavItem href='signup.html'>Sign Up</NavItem>
</Navbar>
