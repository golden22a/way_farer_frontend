import React, { Component } from 'react';
import PostModel from '../models/Post';
import Post from './Post';
import {Row,Col,Pagination} from 'react-materialize';
import ProfileForm from './ProfileForm';
import ProfileForm2 from './ProfileForm2';
import CityModel from '../models/City';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.user.city,
      city:''
    }
    this.deleteProfile = this.deleteProfile.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.cityInfo=this.cityInfo.bind(this);
    }


    deleteProfile() {
    this.props.onDeleteProfile(this.props.profile);
    }

    editProfile() {
    this.props.onEditProfile(this.props.profile)
    }


    cityInfo(id){
      // CityModel.city(this.props.city).then((response) =>{
      CityModel.city(id).then((response) =>{
        this.setState({
          id:id,
          city:response.data.city
        })
        // console.log(city);
      }).catch((err)=> console.log('noooo'))

    }


    render(){
      this.props.user.city ? this.cityInfo(this.props.user.city) : null;

      return (
        <Row clasName="profile-container">
          <Col m={6}>
            <h5>User Profile</h5>
            <p>Name: {this.props.user.firstname+' '+this.props.user.lastname}</p>
             <p>Email: {this.props.user.email}</p>
             <p>City: {this.props.user.city}</p>
             <p>City2: {this.state.city.name}</p>

             <p>Date Joined: {this.props.user.dateJoined}</p>

          </Col>


        </Row>

      );
    }
}
export default Profile
