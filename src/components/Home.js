import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import jwt_decode  from 'jwt-decode';//import everrything
import {getFormbody} from '../helpers/utils';

import API from '../helpers/api'
import {TimeLine ,SideNav,Suggestions} from './index'
import "../Home.css"
// import {PostsList , FriendList , Chat} from './index'
 
 class Home extends React.Component {

    constructor(props){
        super(props);
    }

     render() {
        const {logOut , token,user} =  this.props;
       
   
         return (
             <div className='Home'>
                  <SideNav  logOut={logOut}/>
                    <TimeLine token ={token} />
                    <Suggestions token={token} user={user}/>
             </div>
         );
     }
 }
 
 export default Home;