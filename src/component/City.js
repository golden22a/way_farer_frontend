import React, {Component} from 'react'
<<<<<<< HEAD
import '../CitiesList.css';
=======
import {Col,Card} from 'react-materialize';

>>>>>>> 0d49a711413ba8bb66c34ca57e2288f651a8d61b

class City extends Component {

  render(){

      return (
<<<<<<< HEAD
      <li className="city">
        <div class="card">
          <img src="https://placehold.it/100x100" />
         <h4>{this.props.city.name}</h4>

       </div>
     </li>
=======
        <Col s={12}>
        <li>

    <Card className='blue-grey darken-1' textClassName='white-text' title={this.props.city.name} >
    </Card>
    </li>
</Col>


>>>>>>> 0d49a711413ba8bb66c34ca57e2288f651a8d61b
      )
  }
}

export default City
