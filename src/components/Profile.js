import React from "react";
import "../profile.css";
import FlipMove from "react-flip-move";
import {Tweet ,Loader } from "./index";
import { Avatar, Button} from "@material-ui/core";
import API from '../helpers/api'
import PersonAddIcon from '@material-ui/icons/PersonAdd';


class Profile extends React.Component{

    
    constructor(props){
        super(props);
        this.state={
          loading:true,
            myFollowing :{},
          tweetsList:[],
          followers : [],
          following:[],
          success:false,
          userProfile :{},
          ownProfile:false,
          follow:false,
          avatarList: ["https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=7ce91813e22e1ca59b2723833dffa49f"]
        }

    }

    componentDidMount = async()=>{

      try{

        let token = this.props.token;
        let fetchUserId = this.props.fetchUserId;
      
     
          const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const bodyParameters = {
          key: "value"
       };
            
        let data = await API.get( `users/profile/${fetchUserId}`,
        config,
        bodyParameters,
        );
        // console.log(data.data.tweets);
        // console.log(data);

        let ownUser = await API.get( `users/profile/${this.props.user._id}`,
        config,
        bodyParameters,
        );
      

       if(data.data.success){
        let follow = false;
        let myFollowing = {};

        for(let follow_ of  ownUser.data.data.following){
            myFollowing[follow_.to_user._id] = true;
        }
        if(myFollowing[data.data.data.profile_user._id] === true){
            follow = true;
        }
        

        //    console.log(data.data.data);
            let ownProfile = false;
        if(data.data.data.profile_user._id === this.props.user._id){
            ownProfile=true;
        }
        let tweetsList=data.data.data.user_tweets;

        let followers = data.data.data.followers.map((follow_)=>follow_.from_user);
        let following = data.data.data.following.map((follow_)=>follow_.to_user);
       
         this.setState({
           tweetsList:tweetsList,
           userProfile:data.data.data.profile_user,
           followers :followers,
           following : following,
           success:true,
           ownProfile:ownProfile,
           follow : follow,
           myFollowing : myFollowing,
           loading:false
         })
       }else{
         this.setState({
           success:false
         })
       }
      }catch(err){
        console.error.bind(err);
      }
    
     
    }

    componentDidUpdate = async()=>{


        if(this.state.userProfile){
            // console.log("herr");
            if(this.state.userProfile._id === this.props.fetchUserId ){
                return;
            }
        }
        // console.log("kjk");
        try{

            let token = this.props.token;
            let fetchUserId = this.props.fetchUserId;
          
         
              const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const bodyParameters = {
              key: "value"
           };
                
            let data = await API.get( `users/profile/${fetchUserId}`,
            config,
            bodyParameters,
            );
            // console.log(data.data.tweets);
            // console.log(data);
           if(data.data.success){
            let follow = false;
            let {myFollowing} = this.state;
            // console.log(myFollowing);
            // console.log(myFollowing);
            // console.log(myFollowing[data.data.data.profile_user._id]);
            if(myFollowing[data.data.data.profile_user._id] ===true){
                follow = true;
            }
            
            // let myFollowing = this.state.ownFollowing.filter((follow_)=>follow_.to_user._id === data.data.data.profile_user._id );
            // if(myFollowing.length > 0){
            //     follow = true;
            // }

    
            //    console.log(data.data.data);
                let ownProfile = false;
            if(data.data.data.profile_user._id === this.props.user._id){
                ownProfile=true;
            }
            let tweetsList=data.data.data.user_tweets;
    
            let followers = data.data.data.followers.map((follow_)=>follow_.from_user);
            let following = data.data.data.following.map((follow_)=>follow_.to_user);
    
             this.setState({
               tweetsList:tweetsList,
               userProfile:data.data.data.profile_user,
               followers :followers,
               following : following,
               success:true,
               ownProfile:ownProfile,
               follow: follow,
               loading:false
             })
           }else{
             this.setState({
               success:false
             })
           }
          }catch(err){
            console.error.bind(err);
          }
        
    }


   followUser= async()=>{
    try{
        let token = this.props.token;
        let fetchUserId = this.props.fetchUserId;
   

        //  console.log(123,token);
          const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const bodyParameters = {
          key: "value"
       };
            
        let data = await API.post( `users/follow/${fetchUserId}`,
        bodyParameters,
        config,
        );
        // console.log(data.data.tweets);
       if(data.data.success){
            
            let {myFollowing} = this.state;
        myFollowing[fetchUserId]=true;
         this.setState({
             myFollowing:myFollowing,
          follow:true,
          success:true
         })
       }else{
         this.setState({
           success:false
         })
       }

      
      }catch(err){
        console.error.bind(err);
      }
    
   }


   deleteTweet= async(tweetId)=>{

    try{
      let token = this.props.token;
        const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      const bodyParameters = {
        key: "value"
     };
          
      let data = await API.delete( `tweets/delete/${tweetId}`,
      config,
      bodyParameters
      );
      // console.log(data.data.tweets);
     if(data.data.success){
        let currTweets = this.state.tweetsList;
      let newTweets = currTweets.filter((tweet)=> tweet._id!==tweetId);
        
       this.setState({
         tweetsList : newTweets,
        success:true
       })
     }else{
       this.setState({
         success:false
       })
     }

    
    }catch(err){
      console.error.bind(err);
    }
  

   }

   
   unfollowUser= async()=>{
    try{
        let token = this.props.token;
        let fetchUserId = this.props.fetchUserId;
   

        //  console.log(123,token);
        // console.log( `Bearer ${token}` );
          const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const bodyParameters = {
          key: "value"
       };
            
        let data = await API.post( `users/unfollow/${fetchUserId}`,
        bodyParameters,
        config
        );
        // console.log(data.data.tweets);
       if(data.data.success){

            let {myFollowing} = this.state;
            myFollowing[fetchUserId]=false;

         this.setState({
            myFollowing:myFollowing,
          follow:false,
          success:true
         })
       }else{
         this.setState({
           success:false
         })
       }
      }catch(err){
        console.error.bind(err);
      }
    
   }

  
  render(){

    const {tweetsList , success, avatarList ,followers,following ,userProfile,follow,ownProfile,loading} = this.state;
    // const token = this.props.token;
    const {_id} = this.props.user;
  
    if(loading){
      
      return(<div className="feed"><Loader/></div>);
    }
    
    return (
        <div className="feed">
          <div className="feed__header">
            <h2>Profile</h2>
          </div>
    
          <div className="profile-header">
              <div>
                <div className="tweetFormInput">
                  <Avatar
                   src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=7ce91813e22e1ca59b2723833dffa49f"
                   sx={{ width: 56, height: 56 }}
                   />
                   <div className="user_headerText_profile">
        
                    <h2>
                    <span className="user_headerSpecial_profile_name">
                        @{userProfile.user_name}
                    </span>
                    </h2>
                    <h2>
                    <span className="user_headerSpecial_profile">
                    {"  "}{userProfile.name_}
                    </span>
                    </h2>
                </div>
                {( !ownProfile && !follow)&&(
               <Button
                  onClick={this.followUser}
                  type="submit"
                  className="followButton"
                >
                    Follow
            <PersonAddIcon fontSize="small" />
            
                </Button>)
              }

              {(!ownProfile && follow)&&(
              <Button
                  onClick={this.unfollowUser}
                  type="submit"
                  className="unfollowButton"
                >
                  Unfollow
                </Button>)
            }
                </div>
               <div className="followTable">
                   <div className="follow_tab leftFollow">
        
                    <h2>
                    <span className="follow_tab_name">
                       Following
                    </span>
                    </h2>
                    <h2>
                    <span className="follow_tab_text">
                    {"  "}{following.length}
                    </span>
                    </h2>
                </div>
                <div className="follow_tab">
        
                    <h2>
                    <span className="follow_tab_name">
                       Followers
                    </span>
                    </h2>
                    <h2>
                    <span className="follow_tab_text">
                    {"  "}{followers.length}
                    </span>
                    </h2>
                </div>
                <div className="follow_tab">
        
                    <h2>
                    <span className="follow_tab_name">
                       Tweets
                    </span>
                    </h2>
                    <h2>
                    <span className="follow_tab_text">
                    {"  "}{tweetsList.length}
                    </span>
                    </h2>
                </div>
                </div>
                
                
              
              
              </div>
            </div>

        
            {tweetsList.length ===0 && ( <Tweet
                key={"1"}
                tweetUserId = {0}
                displayName={"Mr Error"}
                username={"ErrorForU"}
                verified={true}
                text={"Looks Like You dont have any tweets !"}
                avatar={"https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=7ce91813e22e1ca59b2723833dffa49f"}
                loggedInUserId ={_id}
              /> )}
          {success && ( <FlipMove>
            {tweetsList.map((tweet , ind) => (
              <Tweet
                key={tweet._id}
                tweetId = {tweet._id}
                displayName={userProfile.name_}
                username={userProfile.user_name}
                tweetUserId = {userProfile._id}
                verified={false}
                text={tweet.content}
                avatar={avatarList[ind%(avatarList.length)]}
                loggedInUserId ={_id}
                deleteTweet = {this.deleteTweet}
              
              />
            ))}

              {/* <Tweet
                key={"abc"}
                displayName={"abc"}
                username={"abc"}
                verified={true}
                text={"abc"}
                // avatar={post.avatar}
              /> */}
          </FlipMove>)}
    
         
        </div>
      );
}
}

export default Profile;