import axios from 'axios';
class User {
  static login(user){

  let request = axios.post("https://calm-sierra-33982.herokuapp.com/auth/login",user);
  return request;

}
static signup(user){
  let request = axios.post("https://calm-sierra-33982.herokuapp.com/auth/signup",user);
  return request;
}
static profileUpdate(token,user){
  let req = axios({
  method: 'put',
  url: `https://calm-sierra-33982.herokuapp.com/api/profile/`,
  headers:{
    'token':token
  },data:{
    firstname:user.firstname,
    lastname:user.lastname,
    city:user.city
  }
})
return req;
}
}
export default User
