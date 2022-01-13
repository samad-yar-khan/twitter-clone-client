import React, { forwardRef } from "react";
import "../userItem.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const UserItem = forwardRef(
  ({ displayName, username, verified, id , avatar }, ref) => {
    return (
      <div className="user" ref={ref}>
        <div className="user_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="user_body">
          <div className="post__header">
            <div className="user_headerText">
        
              <h3>
                <span className="user_headerSpecial">
                
                  {verified && <VerifiedUserIcon className="user_badge" />} @
                  {username}
                </span>
              </h3>
              <h3>
                <span className="user_headerSpecial">
                {displayName}{" "}
                 
                </span>
              </h3>
            </div>
            {/* <div className="user_headerDescription">
              <p>{displayName}</p>
            </div> */}
          </div>
          {/* <img src={image} alt="" /> */}
          <div className="user_footer">
            <PersonAddIcon fontSize="small" />
            
          </div>
        </div>
      </div>
    );
  }
);

export default UserItem;