import React, {Component} from 'react'
import {Col,Card,Row} from 'react-materialize';
import CitiesList from './CitiesList';
import PostContainer from './PostContainer';

class Content extends Component {
  constructor(props){
    super(props);
    this.state={
      token:this.props.token,
      userPosts:true
    }
    this.getCity=this.getCity.bind(this);

  }
  getCity(city){
    this.setState({
      userPost:false,
      city:city
    })
    console.log(city);
  }
  render(){
      return (
  <Row >
  <Col m={3} className='city-list' >
<CitiesList getCity={this.getCity} />
  </Col>
  < PostContainer  token={this.state.token} userPosts={this.state.userPosts} city={this.state.city}/>
  </Row>
)
}
}
export default Content;
