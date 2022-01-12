import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import jwt_decode  from 'jwt-decode';//import everrything
import {getFormbody} from '../helpers/utils';
import API from '../helpers/api'
// import {PostsList , FriendList , Chat} from './index'
 
 class Home extends React.Component {

     render() {
        const {posts , friends , isLoggedIn} =  this.props;
    

         return (
             <div className='home'>
                 Home
             </div>
         );
     }
 }
 
 export default Home;