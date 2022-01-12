import React from "react";
import "../tweetInput.css";
import { Avatar, Button } from "@material-ui/core";
import API from '../helpers/api'

class TweetInput extends React.Component{

    constructor(){
        super();
        this.state={
            tweetText : ""
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
                  <Avatar src="https://www.thestreet.com/.image/t_share/MTgyMDU5NDcwMTc4NzU1NzE1/boredape1.jpg" />
                  <textarea
                    onChange={(e) => this.setTweetMessage(e)}
                    placeholder="What's happening?"
                    type="text"
                  />
                </div>
                <Button
                  onClick={this.postTweet}
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