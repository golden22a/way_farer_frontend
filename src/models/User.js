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
}
export default User
