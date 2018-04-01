import React, {Component} from 'react'
import {Col,Card} from 'react-materialize';
import CityModel from '../models/City';


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
      return (
        <Col s={12}>
        <p>{this.state.city.name}</p>
         <img src={this.state.city.img} />

       </Col>


      )
  }
}

export default CityInfo
