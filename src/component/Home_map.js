import React, { Component } from 'react';
import '../App.css';
import {Row,Col,Carousel} from 'react-materialize';
// import '../style.css';
import './Home.css'
// import {GoogleApiWrapper}from 'google-maps-react';
//
// export class MapContainer extends React.Component {}
// export default GoogleApiWrapper({
//   apiKey: AIzaSyDAfwCoggPDi6ucFfluBOo9kpJHoFbaVtM;
// })(MapContainer)
class Home_map extends Component {
  render() {
    return (
      <div className='container'>


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

// export default Home_user;
