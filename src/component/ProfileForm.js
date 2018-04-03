import React, {Component} from 'react'

class ProfileForm extends Component {
  constructor(props){
    super(props);
    this.state={
      token:this.props.token,
      posts:[],
      firstname: this.props.firstname,
      city:this.props.city,
      length:0,
      index:0
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({
      firstname: event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    var firstname = this.state.firstname
    this.props.onUpdateProfile(firstname)
    this.setState({
      firstname: ""
    })
  }
  render(){
    return (
      <div className='nameForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Write a name here ...'
            type='text'
            value={(this.state.firstname) || ''} />

          <button type='submit'>{this.props.buttonName}</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm
