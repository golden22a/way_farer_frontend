import React, {Component} from 'react'
import {Col,Card,Row} from 'react-materialize';
import CitiesList from './CitiesList';
import PostContainer from './PostContainer';
import CityInfo from './CityInfo';
import CityModel from '../models/City';
class Content extends Component {
  constructor(props){
    super(props);
    this.state={
      token:this.props.token,
      userPosts:false,
      city:this.props.user.city,
      cities:[]

    }
    this.getCity=this.getCity.bind(this);

  }
  componentWillMount(){
    CityModel.all().then((res)=> {
      this.setState({
        cities:res.data.cities
      })

    })
    .catch( (err) => {
      console.log(err);
    })
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


  <Row  className='content'>
  <Col m={3} className='city-list' >
<CitiesList getCity={this.getCity} cities={this.state.cities} />
  </Col>
  <Col m={9}>
  <CityInfo city={this.state.city} cities={this.state.cities}/>
  < PostContainer  token={this.state.token} userPosts={this.state.userPosts} city={this.state.city}/>
  </Col>
</Row>
)
}
}
export default Content;
