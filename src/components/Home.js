import React from 'react';
// import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import jwt_decode  from 'jwt-decode';//import everrything
// import {getFormbody} from '../helpers/utils';

// import API from '../helpers/api'
import {TimeLine ,SideNav,Suggestions ,Profile} from './index'
import "../Home.css"
// import {PostsList , FriendList , Chat} from './index'
 
 class Home extends React.Component {

    constructor(props){
        super(props);

        this.state={
            userProfileId : null,
            showProfile : false,
            user : {},
            fetchUserId :null
        }
    }

    showHome = (user_id)=>{
    //    console.log("hey;")

        this.setState({
            showProfile:false
        })

    }

    showProfile = (user_id)=>{
        
        this.setState({
            showProfile:true,
            fetchUserId:user_id
        })

    }

     render() {
        const {logOut , token,user } =  this.props;
        const {fetchUserId , showProfile , userProfileId } = this.state;
       
   
         return (
             <div className='Home'>
                <SideNav  
                    logOut={logOut} 
                    showProfile={this.showProfile}
                    showHome ={this.showHome} 
                    user ={user}
                />
                  {!showProfile && (<TimeLine token ={token} />)}
                  {showProfile && (<Profile token={token} fetchUserId={fetchUserId} user={user}/>)}
                    
                    <Suggestions token={token} user={user} showProfile={this.showProfile}/>
             </div>
         );
     }
 }
 
 export default Home;