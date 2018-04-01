import axios from 'axios';
class PostModel{
  static userPost(token){
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

}
export default PostModel
