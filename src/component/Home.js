import React, { Component } from 'react';
import '../App.css';
import {Row,Col,Carousel} from 'react-materialize';
// import '../style.css';
import './Home.css'


class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Row>
        <Col l={12} s={12}>

        <Carousel options={{ fullWidth: true }} images={[
  'https://i.ytimg.com/vi/oi2o2r3Sgc0/maxresdefault.jpg',
  'https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/California/los%20angeles/Los%20Angeles%20lead-xlarge.jpg',
  'https://www.acg.org/sites/files/styles/masthead_1440/public/acg-seattle-2880x1200.jpg?itok=BSAs0Uxl',
  'https://travelnoire.com/wp-content/uploads/2014/12/o-NEW-YORK-CITY-WRITER-facebook.jpg',
  'https://saintpaul.s3.amazonaws.com/CMS/1884/saint-paul-skyline-vsp__large-slideshow.jpg'
]} />

        </Col>
        </Row>
        <div>
        <h4>Wayfarer is...</h4>
        </div>
        <Row className='articles'>
        <Col s={4} >
        <h3>Friendly</h3>
        <p>Wonderful, helpful community. Excellent customer service.</p>
        </Col>
        <Col s={4} >
        <h3>Informative</h3>
        <p>A community filled with outstanding knowledge.</p>
        </Col>
        <Col s={4} >
        <h3>Fun</h3>
        <p>Fun to use and learn useful tips about your favorite locations.</p>ip
        </Col>s
        </Row>
      </div>
    );
  }
}

export default Home;
