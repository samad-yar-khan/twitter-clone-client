import React from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import {PostsList , FriendList , Chat} from './index'
 
 class Login extends React.Component {

     render() {
    
         return (
             <div className='d-flex w-50 align-items-center justify-content-around'>
                
                <Form className='d-flex flex-column justify-content-around'>

                    <h1 className='mb-5 d-flex justify-content-around'>
                        Login
                    </h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className='d-flex justify-content-around'>
              Submit
            </Button>
          </Form>
             </div>

         );
     }
 }
 
 export default Login;