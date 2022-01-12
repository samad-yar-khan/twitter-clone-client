import React from "react";
import "../navOption.css";

function NavOptions({ active, text, Icon }) {
  return (
    <div className={`navOption ${active && "navOption--active"}`}>
      <Icon  />
      <h2>{text}</h2>
    </div>
  );
}

export default NavOptions;