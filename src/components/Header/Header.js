import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="Header">
      <div className="header-left">
        <Avatar variant="rounded" className="back-icon">
          <KeyboardBackspaceIcon />
        </Avatar>
        <span>Food & Drinks </span>
        <span> > </span>
        <span>
          <b>Burgers</b>
        </span>
      </div>

      <div className="header-right">
        <div className="input-box">
          <SearchIcon />
          <input type="text" value="Search..." />
        </div>
      </div>
    </div>
  );
}

export default Header;
