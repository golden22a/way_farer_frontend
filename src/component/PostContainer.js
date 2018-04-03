import React, { Component } from 'react';

import PostModel from '../models/Post';
import Post from './Post';
import {Row,Col,Pagination} from 'react-materialize';
class PostContainer extends Component {
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

      PostModel.cityPost(this.state.token,this.props.city).then((res) =>{
        this.setState({
          posts:res.data.posts,
          length:res.data.posts.length
        })
      });
    }
    }
    getCity(id){
      PostModel.cityPost(this.state.token,id).then((res) =>{
        this.setState({
          city:id,
          posts:res.data.posts,
          length:res.data.posts.length
        })

    })
  }

    render(){
      this.props.city != this.state.city ?
        this.getCity(this.props.city) : null;
      let posts=this.state.posts.map((post,index) => {
        return (<Post cities={this.props.cities} updatePost={this.props.updatePost} deletePost={this.props.deletePost} userId={this.props.userId} post={post} key={index+1} />)
      }
    )
    console.log(this.props.offset);
    let display=posts.slice(this.state.index*this.props.offset,this.state.index*this.props.offset+this.props.offset);
      return (
        < Col m={8}  id='posts'>

        <ul>
  <Pagination items={this.state.length % this.props.offset == 0 ? Math.floor(this.state.length/this.props.offset) : Math.floor(this.state.length/this.props.offset)+1 } activePage={1} maxButtons={10}   onSelect={(ev) => {

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
export default PostContainer
