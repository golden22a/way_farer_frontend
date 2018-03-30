import React, { Component } from 'react';
import '../App.css';
// import '../style.css';

import Navbar from './Nav';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
        <img src="../img/download.jpeg" data-reactid=".0.0">
        <div>
        <h4>Wayfarer is...</h4>
        </div>
        <div class="article1">
        <h3>Topic</h3>
        <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </div>
        <div class="article2">
        <h3>Topic</h3>
        <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </div>
        <div class="article3">
        <h3>Topic</h3>
        <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </div>
      </div>
    );
  }
}

export default Home;
