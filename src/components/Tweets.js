import React, { forwardRef } from "react";
import "../tweets.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteIcon from "@material-ui/icons/DeleteOutline";

const Tweet = forwardRef(
  ({ displayName, username, verified, text, avatar ,loggedInUserId ,tweetUserId ,deleteTweet,tweetId}, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {/* <img src={image} alt="" /> */}
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            {true && <PublishIcon fontSize="small"/>}
            {(loggedInUserId === tweetUserId) && <DeleteIcon fontSize="small"  cursor={"pointer"} onClick ={()=>{deleteTweet(tweetId)}}/>}
          </div>
        </div>
      </div>
    );
  }
);

export default Tweet;