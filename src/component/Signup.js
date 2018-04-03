import React, { Component } from 'react';
import {Row, Input,Button,Icon,Col} from 'react-materialize';
import User from '../models/User';
import CityModel from '../models/City';
class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      cities:[],
      connected:this.props.connected
    };
    this.handleSignup=this.handleSignup.bind(this);
    // this.setPassword=this.setPassword.bind(this);
    // this.setEmail=this.setEmail.bind(this);
    // this.setCity=this.setCity.bind(this);
    // this.setFirstNanme=this.setFirstNanme.bind(this);
    // this.setLastName=this.setLastName.bind(this);
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
    console.log('bnoopoo');
       let formData = {
           firstname: this.refs.firstname.value,
           lastname: this.refs.lastname.value,
           email: this.refs.email.value,
           password: this.refs.password.value,
           city: this.refs.city.state.value  || this.refs.city.props.children[0].props.value,
       };
       console.log(formData);
       User.signup(formData).then((res) => {
         this.props.signup(res.data.token,res.data.user);
       }).catch((err) => {
         console.log(err);
       })
   }




  render() {
    if(this.props.connected){

      this.props.history.push('/signup');
    }
    let citieslist=this.state.cities.map((city) => {
      return(
        <option value={city._id}>{city.name}</option>

      );
    });
    return (

      <Row>


        <input type="text" ref="firstname" placeholder="FirstName" s={12} />
        <input type="text" ref="lastname" placeholder="LastName" s={12} />
        <input type="email" ref="email" placeholder="Email" s={12} />
        <input type="password" placeholder="password" s={12} ref='password'/>
        <Input s={12} type='select' label='select a city'  ref='city'>
        {citieslist}
        </Input>
        <Col s={12} offset='s5'  >
        <Button waves='light' onClick={ this.handleSignup }>Signup<Icon left>send</Icon></Button>

      </Col>

      </Row>

    );
  }
}


export default Signup;
