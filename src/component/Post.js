import React, { Component } from 'react';
import {Col,Card,CardTitle,Modal,Button} from 'react-materialize';


class Post extends Component {

  render(){
  return ( <Col s={12}>
    <li>

<Card header={<CardTitle   waves='light'/>}
    title={this.props.post.title}
    >
    <p>{this.props.post.body.substring(0,200)} ....    <Modal
    header={this.props.post.title}
    trigger={<Button>Read More</Button>}>
    <p>{this.props.post.body}</p>
  </Modal></p>
</Card>
</li>
</Col>)
  }
}
export default Post
