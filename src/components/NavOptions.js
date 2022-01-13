import React from "react";
import "../navOption.css";

function NavOptions({ active, text, Icon,clickEvent }) {
  return (
    <div className={`navOption ${active && "navOption--active"}`} onClick={clickEvent}>
      <Icon  />
      <h2>{text}</h2>
    </div>
  );
}

export default NavOptions;