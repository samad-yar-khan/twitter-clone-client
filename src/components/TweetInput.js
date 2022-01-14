import React from "react";
import "../tweetInput.css";
import { Avatar, Button } from "@material-ui/core";
import API from '../helpers/api'
import {getFormbody} from '../helpers/utils';


class TweetInput extends React.Component{

    constructor(props){
        super(props);
        this.state={
            tweetText : "",
            disableButton :false
        }
    }

    setTweetMessage=(e)=>{
       let tweetText = e.target.value;

       if(tweetText.length <= 140){
        this.setState({
          tweetText:tweetText,
          disableButton:false
      })
      }else{
        this.setState({
          disableButton:true
      })
      }
    }

    postTweet = async(e)=>{
        e.preventDefault() ;
        let content = this.state.tweetText;

        // if(content.length){
        //     console.log(content);
        // }

        try{
          let token = this.props.token;
         
            const config = {
              headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${token}`
               }
          };
          const bodyParameters = getFormbody( {
            content : content
         })
              
          let data = await API.post( `tweets/create`,
          bodyParameters,
          config
          );

          // console.log(data.data.tweets);
         if(data.data.success){

          this.props.updateTweets(data.data.data.tweet);

          
         }
        }catch(err){
          console.error.bind(err);
        }

    }

    disableTweet=(e)=>{e.preventDefault()};
 
    render(){

      const {disableButton } = this.state;
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
              {
                !disableButton && (<Button
                  onClick={this.postTweet}
                  type="submit"
                  className="tweetInputButton"
                >
                  Tweet
                </Button>)
              }
              { disableButton && (<Button
                  onClick={this.disableTweet}
                  type="submit"
                  className="tweetInputButtonDisabled"
                >
                  Character Limit Exceeded !
                </Button>)}
              
              </form>
            </div>
          );
    }
}

export default TweetInput;