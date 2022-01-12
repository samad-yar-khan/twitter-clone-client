import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import jwt_decode  from 'jwt-decode';//import everrything
import {getFormbody} from '../helpers/utils';
import API from '../helpers/api'
import {TimeLine ,SideNav,Suggestions} from './index'

// import {PostsList , FriendList , Chat} from './index'
 
 class Home extends React.Component {

    constructor(){
        super();
    }

     render() {
        const {posts , friends , isLoggedIn} =  this.props;
    

         return (
             <div className='App'>
                  <SideNav />
                    <TimeLine />
                    <Suggestions />
             </div>
         );
     }
 }
 
 export default Home;