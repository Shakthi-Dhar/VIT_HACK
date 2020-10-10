import React from "react";
import "./background.css";

const Background = (props) => {
  return (
    <div>
      <div id="body">{props.children}</div>
    </div>
  );
};

export default Background;
