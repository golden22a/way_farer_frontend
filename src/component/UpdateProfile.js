import React, { Component } from 'react';
import {Row, Input, Button, Icon, Col, Modal} from 'react-materialize';
import User from '../models/User';
import CityModel from '../models/City';
import $ from 'jquery';

class UpdateProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      city: this.props.user.city,
      email:this.props.user.email,
      cities:[]
    }
    this.handleSignup=this.handleSignup.bind(this);
  }
  componentWillMount(){
    CityModel.all().then((res)=> {
      this.setState({
        cities:res.data.cities
      })

    })
    .catch( (err) => {
      console.log(err);
    })
  }
  handleSignup () {
       let formData = {
           firstname: this.refs.firstname.value,
           lastname: this.refs.lastname.value,
           city: this.refs.city.state.value  || this.refs.city.props.children[0].props.value,
       };
         User.profileUpdate(this.props.token,formData).then((res) => {
            $('.modal-overlay').remove();
            $('.modal').hide();
            this.props.update(res.data.user);
            console.log(res.data.user);


       }).catch((err) => {
         console.log(err);
       })

   }

  render(){
    let citieslist=this.state.cities.map((city) => {
      return(
        <option value={city._id}>{city.name}</option>

      );
    });
    return(

      <Row>


        <input type="text" ref="firstname" placeholder="FirstName" s={12} defaultValue={this.state.firstname}/>
        <input type="text" ref="lastname" placeholder="LastName" s={12} defaultValue={this.state.lastname} />

        <Input s={12} type='select' label='select a city'  ref='city' defaultValue={this.state.city}>
        {citieslist}
        </Input>
        <Col s={12} offset='s5'  >
        <Button waves='light' onClick={ this.handleSignup }>EditProfile<Icon left>Edit</Icon></Button>

      </Col>

      </Row>

    )
  }
}

export default UpdateProfile
