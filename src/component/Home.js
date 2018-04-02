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
          'https://media.apts247.info/5b/5bb81c29ec194f37bc66234964c56082/amenity_lists/community-amenities.jpg',
          'https://az616578.vo.msecnd.net/files/2016/02/28/635922165286429907739493334_NYC.jpg',
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
          <p>We strive to build a wonderful, helpful community and are constantly looking for ways to improve customer service.</p>
          </Col>
          <Col s={4} >
          <h3>Informative</h3>
          <p>We are determined to build a community filled with knowledgeable people, so that we can help provide the most useful tips to other travelers.</p>
          </Col>
          <Col s={4} >
          <h3>Fun</h3>
          <p>We aim to make the Wayfarer website fun to use, so that customers can bond with others about their favorite locations.</p>
          </Col>
          </Row>
        </div>
      );
    }
  }

  export default Home;
