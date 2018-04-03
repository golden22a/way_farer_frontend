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
}
export default User
