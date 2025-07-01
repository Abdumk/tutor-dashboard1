import React from "react";
import "./Header.css";

function Header({ tutorName }) {
  return (
    <header className="header">
      <h1>Welcome, {tutorName}</h1>
    </header>
  );
}

export default Header;