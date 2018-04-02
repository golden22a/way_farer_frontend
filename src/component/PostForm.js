import React, { Component } from 'react';
import {Row, Input,Button,Icon,Col} from 'react-materialize';
class PostForm extends Component {
  constructor(props){
    super(props);
    this.state={
      title:'',
      body:'',
      city:this.props.city,
    }
  }
  render(){

    let citieslist=this.props.cities.map((city) => {
      return(
        <option value={city._id}>{city.name}</option>

      );
    });
    return(
      <Row>

      <Input type="text" label="title" s={12}  onChange={this.setTitle} />
      <Input s={12} type='select' label='select a city' defaultValue={this.props.city} onChange={(ev) => this.setSelect}>
      {citieslist}
      </Input>
      <Input type='textarea' s={6} label='body' onChane={this.setBody}/>
      <Col s={12} offset='s5'  >
      <Button waves='light' onClick={this.onLogin}>Login<Icon left>send</Icon></Button>
      </Col>
      </Row>
    )
  }
}

export default PostForm;
