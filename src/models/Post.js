import axios from 'axios';
class PostModel{
  static allPost(token){
    let req = axios({
    method: 'GET',
    url: 'http://localhost:3000/api/posts',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'token':token
    }

     });
    return req;
  }
  static userPost(token){
    let req = axios({
    method: 'GET',
    url: 'http://localhost:3000/api/user/posts',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'token':token
    }

     });
    return req;
  }
  static cityPost(token,id){
    let req = axios({
    method: 'GET',
    url: `http://localhost:3000/api/city/${id}/posts`,
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'token':token
    }

     });
    return req;

  }

}
export default PostModel
