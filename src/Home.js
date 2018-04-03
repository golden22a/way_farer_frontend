import React, { Component } from 'react';
import './App.css';
import './style.css';

import Navbar from '../nav';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h4>Wayfarer is...<h4>
        <div class="article1">
        <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </div>
        <div class="article2">
        <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </div>
        <div class="article3">
        </div>
      </div>
    );
  }
}

export default Home;
