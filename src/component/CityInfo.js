import React, {Component} from 'react'
import {Col,Card} from 'react-materialize';
import CityModel from '../models/City';


class CityInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      city:this.props.city
    }
    this.cityInfo=this.cityInfo.bind(this);
  }
  componentWillMount(){
    CityModel.city(this.props.city).then((response) =>{
      console.log("that pupy", response);
      this.setState({
        city:response.data.city
      })
    })
  }
    cityInfo(){
      CityModel.city(this.props.city).then((response) =>{
        this.setState({
          city:response.data.city
        })
      })

    }

  render(){
    this.props.city ? this.cityInfo() : null ;
      return (
        <Col s={12}>
        <p>{this.state.city.name}</p>
         <img src={this.state.city.img} />

       </Col>


      )
  }
}

export default CityInfo
