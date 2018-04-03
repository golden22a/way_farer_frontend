import React, { Component } from 'react';
import {Row, Input,Button,Icon,Col} from 'react-materialize';
import PostModel from '../models/Post';
class PostForm extends Component {
  constructor(props){
    super(props);
    let title= this.props.post ? this.props.post.title : '';
    let body=this.props.post ? this.props.post.body : '';
    let id=this.props.post ? this.props.post._id : '';
    this.state={
      _id:id,
      title:title,
      body:body,
      city:this.props.city,
      update:this.props.update
    };
    this.setTitle=this.setTitle.bind(this);
    this.setBody=this.setBody.bind(this);
    this.setSelect=this.setSelect.bind(this);
    this.onCreatePost=this.onCreatePost.bind(this);
  }

  setTitle(ev){
this.setState({
  title:ev.target.value
})
console.log(this.state);
}
  setBody(ev){
    this.setState({
      body:ev.target.value
    })

  }
  setSelect(ev){
    this.setState({
      city:ev.target.value
    })

  }
  onCreatePost(){
    if(!this.state.update){
    this.props.postPost(this.state);
  }
    else {
      this.props.updatePost(this.state,this.props.post._id);


    }
  }

  render(){

    let citieslist=this.props.cities.map((city) => {
      return(
        <option value={city._id}>{city.name}</option>

      );
    });
    let title= this.props.post ? this.props.post.title : '';
    let body=this.props.post ? this.props.post.body : '';
    return(
      <Row>

      <Input defaultValue={title} type="text" label="title" s={12}  onChange={this.setTitle} />
      <Input defaultValue={this.props.city} s={12} type='select' label='select a city' defaultValue={this.props.city}  onChange={this.setSelect}>
      {citieslist}
      </Input>
      <Input defaultValue={body}  type='textarea' s={6} label='body' onChange={this.setBody}/>
      <Col s={12} offset='s5'  >
      <Button waves='light' onClick={this.onCreatePost}>Post<Icon left>send</Icon></Button>
      </Col>
      </Row>
    )
  }
}

export default PostForm;
