import React, { Component } from 'react';
import '../App.css';
import {Row,Col} from 'react-materialize';
// import '../style.css';



class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Row>
        <Col l={12} s={12}>

        <img  className='responsive-img' src="https://i.ytimg.com/vi/oi2o2r3Sgc0/maxresdefault.jpg" data-reactid=".0.0" />
        </Col>
        </Row>
        <div>
        <h4>Wayfarer is...</h4>
        </div>
        <Row>
        <Col s={3} >
        <h3>Topic</h3>
        <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </Col>
        <Col s={3} >
        <h3>Topic</h3>
        <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </Col>
        <div className="article3">
        <h3>Topic</h3>
        <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </div>
        </Row>
      </div>
    );
  }
}

export default Home;
