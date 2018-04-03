import axios from 'axios';
class CityModel{
  static all(){
    let req=axios.get('http://localhost:3000/city');
    return req;
  }
  static city(id){
    let req=axios.get(`http://localhost:3000/city/${id}/info`);
    return req;
  }

}
export default CityModel
