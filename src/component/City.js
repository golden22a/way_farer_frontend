import React, {Component} from 'react'
import {Col,Card} from 'react-materialize';


class City extends Component {

  render(){

      return (
        <Col s={12}>
        <li>

    <Card className='blue-grey darken-1' textClassName='white-text' title={this.props.city.name} >
    </Card>
    </li>
</Col>


      )
  }
}

export default City
