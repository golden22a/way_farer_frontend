import React, { Component } from 'react';
import PostModel from '../models/Post';
import Post from './Post';
import {Row,Col,Pagination} from 'react-materialize';
import ProfileForm from './ProfileForm';
import ProfileForm2 from './ProfileForm2';

class Profile extends Component {
  constructor(props){
    super(props);
    super();
    this.deleteProfile = this.deleteProfile.bind(this);
    this.editProfile = this.editProfile.bind(this);
    }

    deleteProfile() {
    this.props.onDeleteProfile(this.props.profile);
    }

    editProfile() {
    this.props.onEditProfile(this.props.profile)
    }


    render(){


      return (
        <Row clasName="profile-container">
          <Col m={6}>
            <h5>User Profile</h5>
            <p>Name: {this.props.user.firstname+' '+this.props.user.lastname}</p>
             <p>Email: {this.props.user.email}</p>
             <p>City: {this.props.user.city}</p>
             <p>Date Joined: {this.props.user.dateJoined}</p>

          </Col>
          <ProfileForm onUpdateProfile={this.props.onUpdateProfile}/>
          <ProfileForm2 user={this.props.user}/>

        </Row>

      );
    }
}
export default Profile
