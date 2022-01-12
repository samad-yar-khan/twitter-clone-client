import React from "react";
import "../navOption.css";
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


function NavOptions({ active, text, Icon }) {
  return (
    <div className={`navOption ${active && "navOption--active"}`}>
      <Icon  />
      <h2>{text}</h2>
    </div>
  );
}

export default NavOptions;