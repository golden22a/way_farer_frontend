import axios from 'axios';
class CityModel{
  static all(){
    let req=axios.get('https://calm-sierra-33982.herokuapp.com/city');
    return req;
  }
  static city(id){
    let req=axios.get(`https://calm-sierra-33982.herokuapp.com/city/${id}/info`);
    return req;
  }

}
export default CityModel
