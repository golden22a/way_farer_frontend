import React, { Component } from 'react';
import PostModel from '../models/Post';
import Post from './Post';
import {Row,Col,Pagination} from 'react-materialize';
class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      token:this.props.token,
      posts:[],
      userPosts: this.props.userPosts,
      city:this.props.city,
      length:0,
      index:0
    };
    this.getCity=this.getCity.bind(this);
  }
    componentWillMount(){
      if(this.state.userPosts){
      PostModel.userPost(this.state.token).then((res) =>{
        this.setState({
          posts:res.data.posts,
          length:res.data.posts.length
        })
      })
    }else if(this.state.city){

      PostModel.cityPost(this.state.token,this.state.city).then((res) =>{
        this.setState({
          posts:res.data.posts,
          length:res.data.posts.length
        })
      });
    }
    }
    getCity(){
      PostModel.cityPost(this.state.token,this.props.city).then((res) =>{
        this.setState({
          posts:res.data.posts,
          length:res.data.posts.length
        })

    })
  }

    render(){

      this.props.city ? this.getCity() : null;
      let posts=this.state.posts.map((post,index) => {
        return (<Post post={post} key={index+1} />)
      }
      )
    let display=posts.slice(this.state.index*2,this.state.index*2+2);
      return (

        <Col m={8} >
        <h1>Profile</h1>
        <ul>
          <Pagination items={this.state.length % 2 == 0 ? Math.floor(this.state.length/2) : Math.floor(this.state.length/2)+1 } activePage={1} maxButtons={10}   onSelect={(ev) => {

                this.setState({
                  index:ev-1
            })
          }} />

        {display}
        </ul>

        </Col>

      );
    }
}
export default Profile
