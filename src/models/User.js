import axios from 'axios';
class User {
  static login(user){
    let toReturn;
    axios.post("http://localhost:3000/auth/login",user).then(function (response) {
      localStorage.setItem('token', response.data.token);
    toReturn=response;
  })
  .catch(function (error) {
    toReturn= error
  });
  return toReturn
  }
}
export default User
