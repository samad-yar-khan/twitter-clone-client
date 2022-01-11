import React from 'react';
import Image from '../assets/images/twit_img.png';
import { Container  , Row , Col ,ButtonGroup ,Button } from 'react-bootstrap';
// import {PostsList , FriendList , Chat} from './index'
import {Login , SignUp} from './index'

import axios from 'axios'



 
 class Auth extends React.Component {

    constructor(props){
       
        super(); //must call parents constructor first 
        this.state = {
            signUp:false
        }

    }

    componentDidMount(){
        this.setState({
            signUp:false
        })
    }

    setSignUp = ()=>{

        this.setState({
            signUp:true
        })

    }

    setLogin = ()=>{

        this.setState({
            signUp:false
        })

    }

    signUp = (name,user_name , password , confirmPassword ,email )=>{

    }

    

     render() {
        const {signUp} = this.state;
         return (
             <div className='full-h d-flex'>
                 <div className={"d-none d-md-block overflow-hidden"}>
                      <img src ={Image} />
                 </div>
                 <div className={"full-h d-flex flex-column justify-content-center align-items-center"}>
                 <div className="col-auto ">
                 <ButtonGroup size="lg" className="mb-2 d-flex"  >
                    <Button variant={`${signUp?'light':'primary'}`} onClick={this.setLogin}>Login</Button>
                    <Button variant={`${signUp?'primary':'light'}`}   onClick={this.setSignUp}>SignUp</Button>
                </ButtonGroup>
                    {signUp ?
                    <SignUp/>:
                    <Login/>}
                
                    </div>
                 </div>
                
             </div>
         );
     }
 }
 
 export default Auth;