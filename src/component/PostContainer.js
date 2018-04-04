import React, { Component } from 'react';

import PostModel from '../models/Post';
import Post from './Post';
import {Row,Col,Pagination} from 'react-materialize';
import $ from 'jquery';

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
    this.deletePost=this.deletePost.bind(this);
    this.updatePost=this.updatePost.bind(this);
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
  deletePost(post){
    let index=this.state.posts.indexOf(post);
    PostModel.deletePost(this.props.token,post._id).then((res)=>{
    let posts=this.state.posts;
    posts.splice(index,1);
    this.setState({
      posts:posts
    })
    }).catch((error) => {
      console.log(error);
    })
  }
  updatePost(post,id){
    if(this.state.userPosts || this.state.city.toString() == post.city.toString()){
      console.log('here');
    let index=this.state.posts.findIndex((a)=>a._id==id);
    console.log(index);
      PostModel.postUpdate(this.props.token,post,id).then((res)=>{
        let posts=this.state.posts;
        posts[index]=res.data.post;
        this.setState({
          posts:posts
        })
        $('.modal').removeClass('open');
        $('.modal').hide();
        $('.modal-overlay').remove();



      }).catch((error) => {
        console.log(error);
      })
    }
    else{
      console.log('i am here man');
      this.props.updatePost(post,id);
    }
  }

    render(){
      this.props.city != this.state.city ?
        this.getCity(this.props.city) : null;
      let posts=this.state.posts.map((post,index) => {
        return (<Post cities={this.props.cities} updatePost={this.updatePost} deletePost={this.deletePost} userId={this.props.userId} post={post} key={index+1} />)
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
