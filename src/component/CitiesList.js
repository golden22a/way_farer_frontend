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

  let cities = this.state.cities.map((city, i) => {
            return (
              <City
                city={city}
                key={i}
                />
            )
        })
    return (
    <div className ="cities-list">
      <ul>
      {cities}
      </ul>
      </div>

    )}
}

export default CitiesList;
