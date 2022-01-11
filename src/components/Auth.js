import React from 'react';
import Image from '../assets/images/twit_img.png';
import { Container  , Row , Col ,ButtonGroup ,Button } from 'react-bootstrap';
// import {PostsList , FriendList , Chat} from './index'
import API from '../helpers/api'
import {getFormbody} from '../helpers/utils'
import {Login , SignUp} from './index'
import Modal from 'react-bootstrap/Modal'

import axios from 'axios'



 
 class Auth extends React.Component {

    constructor(props){
       
        super(); //must call parents constructor first 
        this.state = {
            signUp:false,
            successSignUp :false,
            failedSignUp :false,
            message :""
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

    signUp = async (name,user_name , password , confirmPassword ,email )=>{
        
        try{
            const bodyParameters = getFormbody({
                email :email,
                name_:name,
                password:password,
                user_name : user_name,
                confirmPassword:confirmPassword
             });
            //  console.log(bodyParameters);
             const config = {
                headers: { Authorization: `Bearer` }
            };
            const data = await API.post('/users/signup',
             bodyParameters ,{
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              });
        //    console.log(data);
            if(data.success){
                this.setState({
                    successSignUp:true,
                    failedSignUp:false,
                    SignUp:false,
                    message:data.message
                })
            }else{
                this.setState({
                    successSignUp:true,
                    failedSignUp:false,
                    message:data.message
                })
            }
        }catch(err){
            console.log(err);
        }
        

    }

    

     render() {
        const {signUp ,successSignUp,failedSignUp,message} = this.state;
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
                    <SignUp
                        signUp = {this.signUp}
                    />:
                    <Login
                        logIn = {this.props.logIn}
                        loginFail = {this.props.loginFail}
                    />}
                    
                    </div>
                 </div>
                {/* {failedSignUp && (<Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Signed In Sucess!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{message}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                    </Modal.Dialog>)}
                    {successSignUp && (<Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign Up Failed!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{message}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                    </Modal.Dialog>)} */}
             </div>
             
         );
     }
 }
 
 export default Auth;