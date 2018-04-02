import React, {Component} from 'react'
import {Col,Card,Row} from 'react-materialize';
import CitiesList from './CitiesList';
import PostContainer from './PostContainer';
import CityInfo from './CityInfo';
class Content extends Component {
  constructor(props){
    super(props);
    this.state={
      token:this.props.token,
      userPosts:false,
      city:this.props.user.city,

    }
    this.getCity=this.getCity.bind(this);

  }
  componentWillUpdate(){
    console.log('updating');
  }
  getCity(city){
    this.setState({
      userPost:false,
      city:city
    })
    console.log(city);
  }
  render(){
    let info= this.state.city ? <CityInfo city={this.state.city}/>
  : null ;
  console.log('this is info',info);
      return (


  <Row  className='content'>
  <Col m={3} className='city-list' >
<CitiesList getCity={this.getCity} />
  </Col>
  <Col m={9}>
  {info}
  < PostContainer  token={this.state.token} userPosts={this.state.userPosts} city={this.state.city}/>
  </Col>
</Row>
)
}
}
export default Content;
