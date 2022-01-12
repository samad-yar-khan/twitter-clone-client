import React from "react";
import "../timeLine.css";
import FlipMove from "react-flip-move";
import {TweetInput , Tweet} from "./index";
import { render } from "react-dom";

class TimeLine extends React.Component{

    
    constructor(){
        super();
    }


  
render(){
    return (
        <div className="feed">
          <div className="feed__header">
            <h2>Home</h2>
          </div>
    
          <TweetInput />
    
          <FlipMove>
            {/* {posts.map((post) => (
              <Tweet
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
              />
            ))} */}
          </FlipMove>
        </div>
      );
}
}

export default TimeLine;