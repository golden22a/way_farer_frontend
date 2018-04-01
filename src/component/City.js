import React, {Component} from 'react'


class City extends Component {

  render(){

      return (
      <li className="city" key={this.props.key}>
         {this.props.city.name}
       </li>
      )
  }
}

export default City
