import React from "react";
import "../navOption.css";

function NavOptions({ active, text, Icon,clickEvent ,user}) {
  return (
    <div className={`navOption ${active && "navOption--active"}`} onClick={()=>{clickEvent(user._id)}}>
      <Icon  />
      <h2>{text}</h2>
    </div>
  );
}

export default NavOptions;