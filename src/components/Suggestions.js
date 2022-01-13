import React from "react";
import "../suggestions.css";
import SearchIcon from "@material-ui/icons/Search";
import API from '../helpers/api'
import {UserItem}  from './index'


class Suggestions extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      userList : [],
      avatarList: ["https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=7ce91813e22e1ca59b2723833dffa49f",
      "https://assets.thevalue.com/ad81a47725585b993585b3a821d0ec02c7435662/mobile/31dd3295b8e3e1a81221ebe94f68fa96314512c8.jpg?1630572123",
      "https://www.reuters.com/resizer/xSJTo-AzwRkDIeFUCQzAYC9gFfk=/505x631/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7GBCHQUCEROJDPEVYQW7XG7VAE.jpg",
      "https://morningmaillive.com/wp-content/uploads/2021/12/bored-ape-nft-sothebys-record-sale-gID_4-1636814089.jpg",
      "https://cdn.vox-cdn.com/thumbor/2xj1ySLIz1EZ49NvSsPzq8Itjyg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg",

      "https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg",
      "https://static.wixstatic.com/media/5c4681_8ce904c16617466ca106cc28e8605777~mv2.jpg/v1/fill/w_906,h_649,al_c,q_90/5c4681_8ce904c16617466ca106cc28e8605777~mv2.jpg",
      "https://news.artnet.com/app/news-upload/2021/08/BAYC-8746.png",
      "https://cdn.lifestyleasia.com/wp-content/uploads/sites/6/2021/11/03211231/https___hypebeast.com_image_2021_11_rolling-stone-bored-ape-yacht-club-digital-cover-nfts-announcement-001-1.jpg",
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg",
      "https://www.cryptotimes.io/wp-content/uploads/2021/09/Bored-Ape-2087-Website.jpg"
    ]
      ,
      success:false
    }
    
  }

  componentDidMount= async ()=>{

    try{
      let token = this.props.token;
  
      //  console.log(123,token);
        const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      const bodyParameters = {
        key: "value"
     };
          
      let data = await API.get( `users/all`,
      config,
      bodyParameters,
      );
      // console.log(data.data.tweets);


      let UserList = data.data.users;
      let filteredList = UserList.filter((userA) => userA._id!== this.props.user._id);
     if(data.data.success){
       this.setState({
         userList:filteredList,
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

      const {userList , avatarList ,success} = this.state;
      const {user , showProfile} = this.props;
        return (
            <div className="suggestions">
              <div className="suggestionsInput">
                <SearchIcon className="userSearch" />
                <input placeholder="Search Twitter" type="text" />
              </div>

              <div className="user-suggestions">
              <div className="user-suggestions-header">
                <h2>
                  Suggestions
                </h2>
              </div>
              {success && (userList.map((user , ind) => (
              <UserItem
                key={user._id}
                id = {user._id}
                displayName={user.name_}
                username={user.user_name}
                verified={true}
                showProfile={showProfile}
                avatar={avatarList[ind%(avatarList.length)]}
              
              />
            )))}

              </div>
             
            </div>
          );

    }

 
}

export default Suggestions;