import React, { Component } from 'react';
import {Col,Card,CardTitle,Modal,Button} from 'react-materialize';
import PostForm from './PostForm';

class Post extends Component {

  render(){
    console.log(this.props.post.user);
let userAction=    this.props.userId == this.props.post.user ?
(
  <div>
  <Modal
  header={this.props.post.title}
  trigger={<Button>Update</Button>}>
  <PostForm update={true} updatePost={this.props.updatePost} city={this.props.post.city} post={this.props.post} cities={this.props.cities}/>

</Modal>
<Button onClick={()=>
  {
    this.props.deletePost(this.props.post);
  }
}>Delete</Button>
</div>

): null
  return ( <Col s={12}>
    <li>

<Card header={<CardTitle   waves='light'/>}
    title={this.props.post.title}
    >
    <p>{this.props.post.body.substring(0,200)} ....
    <Modal
    header={this.props.post.title}
    trigger={<Button>Read More</Button>}>
    <p>{this.props.post.body}</p>
  </Modal></p>
  {userAction}
</Card>
</li>
</Col>)
  }
}
export default Post
