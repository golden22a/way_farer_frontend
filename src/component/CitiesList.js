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
  // let el= !this.props.connected ? (<ul>
  //   <li>
  //     <CitiesListItem href="/login">Sign In</CitiesListItem>
  //   </li>
  //   <li>
  //     <CitiesListItem href="/signup">Sign Up</CitiesListItem>
  //   </li>
  // </ul>) : (<ul>
  //   <li>
  //     <CitiesListItem  href="/profile">{this.props.user.firstname} </CitiesListItem>
  //   </li>
  //   <li>
  //     <CitiesListItem href="/posts">Posts</CitiesListItem>
  //   </li>
  // </ul>);

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
      {cities}
      </div>

    )}
}

export default CitiesList;
