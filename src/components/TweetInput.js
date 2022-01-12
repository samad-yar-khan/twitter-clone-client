import React from "react";
import "../tweetInput.css";
import { Avatar, Button } from "@material-ui/core";
import API from '../helpers/api'

class TweetInput{

    constructor(props){
        super(props);
        this.state={
            tweetText = ""
        }
    }

    setTweetMessage=(e)=>{
       let tweetText = e.target.value;
       this.setState({
           tweetText
       })
    }

    postTweet = async(e)=>{
        e.preventDefault() ;
        let content = this.state.tweetText;

        if(content.length){
            console.log(content);
        }
    }
 
    render(){
        return (
            <div className="tweetInput">
              <form>
                <div className="tweetFormInput">
                  <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                  <input
                    onChange={(e) => setTweetMessage(e.target.value)}
                    placeholder="What's happening?"
                    type="text"
                  />
                </div>
                <Button
                  onClick={(e)=>{this.postTweet}}
                  type="submit"
                  className="tweetInputButton"
                >
                  Tweet
                </Button>
              </form>
            </div>
          );
    }
}

export default TweetInput;