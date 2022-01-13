import React from "react";
import "../sideNav.css";
import TwitterIcon from "@material-ui/icons/Twitter";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

import {NavOptions} from './index'

function SideNav({logOut}) {

  

  return (
    <div className="sideNav">
      <TwitterIcon className="sideNavIcons" />
      <NavOptions active={true} Icon={HomeIcon} text="Home" />
      <NavOptions active={false} Icon={SearchIcon} text="Explore" />
      {/* <NavOptions  active={false} Icon={NotificationsNoneIcon} text="Notifications" />
      <NavOptions   active={false} Icon={MailOutlineIcon} text="Messages" />
      <NavOptions   active={false} Icon={BookmarkBorderIcon} text="Bookmarks" />
      <NavOptions  active={false} Icon={ListAltIcon} text="Lists" /> */}
      <NavOptions  active={false} Icon={PermIdentityIcon} text="Profile" />
      <NavOptions   active={false} Icon={MoreHorizIcon} text="More" />
      

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sideNavTweet" fullWidth>
        Tweet
      </Button>
      <Button variant="outlined" className="sideNavLogout" fullWidth onClick={()=>{logOut();}}>
        Log Out
      </Button>
    </div>
  );
}

export default SideNav;