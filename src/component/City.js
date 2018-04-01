import React, {Component} from 'react'
import '../CitiesList.css';

class City extends Component {

  render(){

      return (
      <li className="city">
        <div class="card">
          <img src="https://placehold.it/100x100" />
         <h4>{this.props.city.name}</h4>

       </div>
     </li>
      )
  }
}

export default City
