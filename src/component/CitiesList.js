import React, { Component } from 'react';
import City from './City';
import CityModel from '../models/City';
import '../CitiesList.css';

class CitiesList extends Component {
constructor (props) {
    super(props)
    this.state={
      cities:this.props.cities
    }

}


  render() {

  let cities = this.props.cities.map( (city,index) => {

            return (
              <City
                city={city}
                key={index}
                getCity={this.props.getCity}
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
