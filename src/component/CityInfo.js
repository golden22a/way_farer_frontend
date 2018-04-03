import React, {Component} from 'react'
import {Col,Card,Button,Modal} from 'react-materialize';
import CityModel from '../models/City';
import PostForm from './PostForm';

class CityInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.city,
      city:''
    }
    this.cityInfo=this.cityInfo.bind(this);
  }
  componentWillMount(){
    this.cityInfo(this.state.id);
  }
    cityInfo(id){
      CityModel.city(id).then((response) =>{
        this.setState({
          id:id,
          city:response.data.city
        })
      })

    }

  render(){
    this.props.city != this.state.id ? this.cityInfo(this.props.city) : null;
    console.log(this.state.city.img);
      return (
        <Col s={12}>
        <Col s={6} >
        <h2>{this.state.city.name}</h2>
        </Col><Col s={6} >
         <img className='img-responsive small'src={this.state.city.img} />
         </Col>
         <Col s={8}>
         <Modal
  header='Post'
  trigger={         <Button floating large className='red right' waves='light' icon='add' />
}>
<PostForm update={false} postPost={this.props.postPost} city={this.state.id} cities={this.props.cities}/>
</Modal>
         </Col>
       </Col>


      )
  }
}

export default CityInfo
