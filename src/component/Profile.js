import React, { Component } from 'react';
import PostModel from '../models/Post';
import Post from './Post';
import {Row,Col,Pagination,Input, Button, Icon, Modal} from 'react-materialize';
import ProfileForm from './ProfileForm';
import ProfileForm2 from './ProfileForm2';
import CityModel from '../models/City';
import UserModel from '../models/User';
import UpdateProfile from './UpdateProfile';
import $ from 'jquery';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      city: this.props.user.city,
      email:this.props.user.email,
      length:0
    }
    this.deleteProfile = this.deleteProfile.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.cityInfo=this.cityInfo.bind(this);
    this.updateUser=this.updateUser.bind(this);
    // this.postPost=this.postPost.bind(this);
    }

  componentWillMount(){
    // postPost(post){
      PostModel.userPost(this.props.token).then((res)=>{
        this.setState({
          length:res.data.posts.length

        })
      }).catch((error) => {
        console.log(error);
      })
    // }
  }
  //   postPost(post){
    // PostModel.cityPost(this.state.token,this.props.city).then((res) =>{
  //     this.setState({
  //       posts:res.data.posts,
  //       length:res.data.posts.length
  //     })
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  updateUser(user, id){
    UserModel.userUpdate(this.props.token,this.state).then((res)=>{
      $('.modal-overlay').remove();

    }).catch((error) => {
      console.log(error);
    })
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
      }).catch((err)=> console.log('prob with loading city'))

    }


    render(){
      this.props.user.city ? this.cityInfo(this.props.user.city) : null;

      return (
        <Row clasName="profile-container">
          <Col m={6}>
            <h5>User Profile</h5>
            <p>Name: {this.props.user.firstname+'     '+this.props.user.lastname}</p>
             <p>Email: {this.props.user.email}</p>
             <p>City: {this.state.city.name}</p>
             <p>Number of posts: <span className="new badge" data-badge-caption="posts">{this.state.length}</span></p>

             <p>Date Joined: {this.props.user.dateJoined}</p>

          </Col>
          <Modal id='profileUpdateModal'
          header={'profileUpdate'}
          trigger={<Button>edit profile</Button>}>
          <UpdateProfile token={this.props.token} user={this.props.user} update={this.props.update}/>
          </Modal>


        </Row>

      );
    }
}
export default Profile
