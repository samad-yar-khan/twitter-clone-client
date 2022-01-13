import React from "react";
import "../timeLine.css";
import FlipMove from "react-flip-move";
import {TweetInput , Tweet} from "./index";
import API from '../helpers/api'


class TimeLine extends React.Component{

    
    constructor(props){
        super(props);
        this.state={
          tweetsList:[],
          success:false,
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
        }

    }

    componentDidMount = async()=>{

      try{
        let token = this.props.token;
        console.log( `Bearer ${token}` );;

        //  console.log(123,token);
          const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const bodyParameters = {
          key: "value"
       };
            
        let data = await API.get( `tweets/timeline`,
        config,
        bodyParameters,
        );
        // console.log(data.data.tweets);
       if(data.data.success){
         this.setState({
           tweetsList:data.data.tweets,
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


    updateTweets= async(tweet) => {
        
        let {tweetsList }= this.state;
        tweetsList.unshift(tweet);
        this.setState({
          tweetsList:tweetsList
        });

    }


  
  render(){

    const {tweetsList , success, avatarList} = this.state;
    const token = this.props.token;
    return (
        <div className="feed">
          <div className="feed__header">
            <h2>Home</h2>
          </div>
    
          <TweetInput token={token} updateTweets={this.updateTweets}/>

          {!success && 
              <Tweet
                key={"1"}
                displayName={"Mr Error"}
                username={"ErrorForU"}
                verified={true}
                text={"Looks Like we cant fetch your tweets !"}
                // avatar={post.avatar}
              /> }

          {success && ( <FlipMove>
            {tweetsList.map((tweet , ind) => (
              <Tweet
                key={tweet._id}

                displayName={tweet.user.name}
                username={tweet.user.user_name}
                verified={true}
                text={tweet.content}
                avatar={avatarList[ind%(avatarList.length)]}
              
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

export default TimeLine;