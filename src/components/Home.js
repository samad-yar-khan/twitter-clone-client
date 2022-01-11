import React from 'react';

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