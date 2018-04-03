import React, {Component} from 'react'
import {Col,Card,Row} from 'react-materialize';
import CitiesList from './CitiesList';
import PostContainer from './PostContainer';
import CityInfo from './CityInfo';
import CityModel from '../models/City';
import PostModel from '../models/Post';

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
    this.postPost=this.postPost.bind(this);
  }
  componentWillMount(){
    CityModel.all().then((res)=> {
      this.setState({
        cities:res.data.cities
      })

    })
    .catch( (err) => {
      console.log(err.response.data);
    })
  }
  getCity(city){
    this.setState({
      userPost:false,
      city:city
    })
    console.log(city);
  }
  postPost(post){
    PostModel.postPost(this.props.token,post).then((res)=>{
    this.setState({
      city:post.city
    })
    }).catch((error) => {
      console.log(error);
    })
  }
  render(){

      return (


  <Row  className='content'>
  <Col m={3} className='city-list' >
<CitiesList getCity={this.getCity} cities={this.state.cities} />
  </Col>
  <Col m={9}>
  <CityInfo postPost={this.postPost} city={this.state.city} cities={this.state.cities}/>
  < PostContainer  token={this.state.token} userPosts={this.state.userPosts} city={this.state.city}/>
  </Col>
</Row>
)
}
}
export default Content;
