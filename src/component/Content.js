import React, {Component} from 'react'
import {Col,Card,Row} from 'react-materialize';
import CitiesList from './CitiesList';
import PostContainer from './PostContainer';
import CityInfo from './CityInfo';
import CityModel from '../models/City';
import PostModel from '../models/Post';
import $ from 'jquery';

class Content extends Component {
  constructor(props){
    super(props);
    this.state={
      token:this.props.token,
      userPosts:this.props.userPosts || false,
      city:this.props.user.city,
      cities:[]
    }
    this.getCity=this.getCity.bind(this);
    this.postPost=this.postPost.bind(this);
    this.deletePost=this.deletePost.bind(this);
    this.updatePost=this.updatePost.bind(this);
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
    $('.modal').removeClass('open');
    $('.modal-overlay').remove();
    $('.modal').hide();

    }).catch((error) => {
      console.log(error);
    })

  }
  deletePost(post){
    PostModel.deletePost(this.props.token,post._id).then((res)=>{
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    })
    }
    updatePost(post,id){
      PostModel.postUpdate(this.props.token,post,id).then((res)=>{
        $('.modal-overlay').remove();
        window.location.reload();

      }).catch((error) => {
        console.log(error);
      })
    }

  render(){
    let content = this.props.userPosts ?
    (<Col m={12}>
      < PostContainer offset={5} cities={this.state.cities} updatePost={this.updatePost} deletePost={this.deletePost} userId={this.props.user._id} token={this.state.token} userPosts={this.state.userPosts} city={this.state.city}/>
      </Col>)
    :
    (
      <div>
      <Col m={3} className='city-list' >
    <CitiesList getCity={this.getCity} cities={this.state.cities} />
    </Col>
    <Col m={9}>
    <CityInfo postPost={this.postPost} city={this.state.city} cities={this.state.cities}/>
    < PostContainer offset={2} cities={this.state.cities} updatePost={this.updatePost} deletePost={this.deletePost} userId={this.props.user._id} token={this.state.token} userPosts={this.state.userPosts} city={this.state.city}/>
    </Col>
    </div>
    )
      return (


  <Row  className='content'>
  {content}
</Row>
)
}
}
export default Content;
