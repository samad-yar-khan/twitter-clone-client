import React from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import {PostsList , FriendList , Chat} from './index'
 
 class SignUp extends React.Component {

  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      name_: '',
      user_name : ''
    };
  }

  // componentWillUnmount() {
  //   this.props.dispatch(clearAuthState());
  // }

  handleNameChange = (e) => {
    this.setState({
      name_: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleConfirmPasswordChange = (e) => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };

  handleUserNameChange = (e) => {
    this.setState({
      user_name: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name_, email, password, confirmPassword ,user_name} = this.state;
    this.props.signUp(name_,user_name , password , confirmPassword ,email );

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
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="UserName">
          <Form.Control type="text" placeholder="User Name" onChange={(e)=>{this.handleUserNameChange(e)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Control type="text" placeholder="Name"  onChange={(e)=>{this.handleNameChange(e)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{this.handlePasswordChange(e)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfPassword">
          <Form.Control type="password" placeholder="Confirm Password"  onChange={(e)=>{this.handleConfirmPasswordChange(e);}} />
          {this.props.successSignUp && (<Form.Text className="text-muted">
                Signed Up ! for twitter
          </Form.Text>)}
          {this.props.failedSignUp && (<Form.Text variant="danger" className="text-danger">
                Signup Failed {this.props.message}
          </Form.Text>)}
        </Form.Group>
        
       
        <Button variant="primary" type="submit" className='d-flex justify-content-around' onClick={(e)=>{this.handleFormSubmit(e);}}>
          Submit
        </Button>
    
      </Form>
        
         </div>
         );
     }
 }
 
 export default SignUp;