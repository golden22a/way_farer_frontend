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
  static postPost(token,post){
    console.log(post);
    let req = axios({
    method: 'post',
    url: `http://localhost:3000/api/post`,
    headers:{
      'token':token
    },data:{
      title:post.title,
      body:post.body,
      city:post.city
    }


 });
    return req;
  }

}
export default PostModel
