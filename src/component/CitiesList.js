import React, { Component } from 'react';
import City from './City';
import CityModel from '../models/City';

class CitiesList extends Component {
constructor (props) {
    super(props)
    this.state={
      cities:[]
    }


}

componentWillMount() {
  CityModel.all().then((res)=> {
    this.setState({
      cities:res.data.cities
    })

  })
  .catch( (err) => {
    console.log(err);
  })
}
  render() {

  let cities = this.state.cities.map( (city,index) => {

            return (
              <City
                city={city}
                key={index}
                />
            )
        })
    return (

      <ul >
      {cities}
    </ul>


    )}
}

export default CitiesList;
