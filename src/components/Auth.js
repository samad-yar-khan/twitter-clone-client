import React from 'react';
import Image from '../assets/images/twit_img.png';
import { Container  , Row , Col } from 'react-bootstrap';
// import {PostsList , FriendList , Chat} from './index'
import {Login , SignUp} from './index'



 
 class Auth extends React.Component {

     render() {
    
         return (
             <div className='border border-blue full-h d-flex justify-content-center"'>
                 <Login />
                 <SignUp />
             </div>
         );
     }
 }
 
 export default Auth;