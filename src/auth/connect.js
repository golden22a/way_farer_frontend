import axios from 'axios';
export default class Connect {
static islogged(token){
  console.log(token);
  let request = axios({
  method: 'GET',
  url: 'http://localhost:3000/api/okay',
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded',
    'token':token
  }

   });

  return request;

  }

}
