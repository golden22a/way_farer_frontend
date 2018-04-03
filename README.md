# About
Frontend portion of Project Wayfarer

## Languages used

ReactJS, HTML5, CSS, Git, Github

## Objective

Build a website to share tips about a location with other travelers.

## Biggest wins

Felix: Understanding React enough to make things work.
Juan: Getting the basics of the profile page to work.
Lamberto: Helping Juan Carlos with Postman and the backend.
Halim: Getting Wayfarer to work.

## Biggest challenge

Felix: Understanding React.
Juan: Passing state as callbacks.
Lamberto: Connecting the frontend to the backend.
 
Home.js

class Home extends Component {
    render() {
      return (
        <div className='container'>
        <Row>
        <Col l={12} s={12}>

                <Carousel options={{ fullWidth: true }} images={[
          'https://i.ytimg.com/vi/oi2o2r3Sgc0/maxresdefault.jpg',
          'https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/California/los%20angeles/Los%20Angeles%20lead-xlarge.jpg',
          'https://media.apts247.info/5b/5bb81c29ec194f37bc66234964c56082/amenity_lists/community-amenities.jpg',
          'https://az616578.vo.msecnd.net/files/2016/02/28/635922165286429907739493334_NYC.jpg',
          'https://saintpaul.s3.amazonaws.com/CMS/1884/saint-paul-skyline-vsp__large-slideshow.jpg'
        ]} />

        </Col>
        </Row>


Login.js
        
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      connected:this.props.connected
    };
    this.onLogin=this.onLogin.bind(this);
    this.setPassword=this.setPassword.bind(this);
    this.setEmail=this.setEmail.bind(this);
    this.showModal = this.showModal.bind(this);
    this.modId = 'yo';
  }
  
  
Nav.js

render() {
  let el= !this.props.connected ? (<ul>
    <li>
      <NavItem><Modal id='loginModal'
      header={'login'}
      trigger={<Button>login</Button>}>
      <Login login={this.props.login} />
    </Modal></NavItem>
    </li>
    <li>
      <NavItem><Modal id='signupModal'
      header={'signup'}
      trigger={<Button>signup</Button>}>
      <Signup signup={this.props.signup} />
    </Modal></NavItem>
    </li>
    
    
  Post.js
  
  class Post extends Component {

  render(){
    console.log(this.props.post.user);
let userAction=    this.props.userId == this.props.post.user ?
(
  <div>
  <Modal
  header={this.props.post.title}
  trigger={<Button>Update</Button>}>
  <PostForm update={true} updatePost={this.props.updatePost} city={this.props.post.city} post={this.props.post} cities={this.props.cities}/>
    
   
