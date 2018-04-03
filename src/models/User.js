import axios from 'axios';
class User {
  static login(user){

  let request = axios.post("http://localhost:3000/auth/login",user);
  return request;

}
static signup(user){
  let request = axios.post("http://localhost:3000/auth/signup",user);
  return request;
}
static profileUpdate(token,user){
  let req = axios({
  method: 'put',
  url: `http://localhost:3000/api/profile/`,
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
