import React from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import {PostsList , FriendList , Chat} from './index'
 
class Login extends React.Component {

  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange=(e)=>{
  
      this.setState({
          email:e.target.value
      })
  }

  handlePasswordChange=(e)=>{
  
    this.setState({
        password:e.target.value
    })
}

  handleFormSubmit = (e) => {
    e.preventDefault();
    const {email ,  password} = this.state;
    this.props.logIn(email,password);
    // console.log('email' , email );
    // console.log('pass' , password)

    // console.log("email" , this.emailInputRef);
    // console.log("pass" , this.passwordInputRef);
    // if(email && password){
    //   console.log(email,password);
    // }


    this.setState({
        email:'',
        password:'',
    })
  };



     render() {
    
         return (
                      <div className='d-flex align-items-center justify-content-around align-items-center'>
                
            <Form className='d-flex flex-column justify-content-around'>

                {/* <h1 className='mb-5 d-flex justify-content-around'>
                    SignUp
                </h1> */}
        <Form.Group className="mb-3 mt-3 "  controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{this.handleEmailChange(e)}}/>
          <Form.Text className="text-muted">
            We are excited to have you back here!
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{this.handlePasswordChange(e)}}/>
          {this.props.loginFail && (<Form.Text className="text-muted">
            We are excited to have you back here!
          </Form.Text>)}
        </Form.Group>
        
       
        <Button variant="primary" type="submit" className='d-flex justify-content-around' onClick={(e)=>{this.handleFormSubmit(e)}}>
          Submit
        </Button>

      </Form>
      </div>

         );
     }
 }
 
 export default Login;