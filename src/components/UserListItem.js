import React, { forwardRef } from "react";
import "../userItem.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";


const UserItem = forwardRef(
  ({ displayName, username, verified, id , avatar ,showProfile}, ref) => {
    return (
      <div className="user" ref={ref} onClick={()=>{showProfile(id)}}>
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
        
        </div>
      </div>
    );
  }
);

export default UserItem;