import React from "react";
import "./Avatar.css";

function Avatar({ src, alt }) {
  return (
    <img className="avatar" src={src} alt={alt} />
  );
}

export default Avatar;