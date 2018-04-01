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
      length:0,
      index:0
    };
  }
    componentWillMount(){
      PostModel.userPost(this.state.token).then((res) =>{
        this.setState({
          posts:res.data.posts,
          length:res.data.posts.length
        })
      })


    }

    render(){

      let posts=this.state.posts.map((post,index) => {
        return (<Post post={post} key={index+1} />)
      }
    )
    let display=posts.slice(this.state.index*3,this.state.index*3+3);
      return (
        < Col m={8} >

        <ul>
  <Pagination items={this.state.length % 3 == 0 ? Math.floor(this.state.length/3) : Math.floor(this.state.length/3)+1 } activePage={1} maxButtons={10}   onSelect={(ev) => {
    
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
