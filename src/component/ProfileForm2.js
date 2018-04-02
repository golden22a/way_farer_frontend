import React, {Component} from 'react'

class ProfileForm2 extends Component {
  constructor(props){
    super(props);
    // this.state={
    //   token:this.props.token,
    //   firstname: this.props.firstname,
    //   lastname: this.props.lastname,
    //   email: this.props.email,
    //   city: this.props.city
    //
    // };

    }

handleChangeFor = (propertyName) => (event) => {
    const { user } = this.state;
    const newContact = {
      ...user,
      [propertyName]: event.target.value
    };
    this.setState({ user: newContact });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default ProfileForm2
