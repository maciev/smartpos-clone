import React from "react";
import "./Sidebar.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ForumIcon from "@material-ui/icons/Forum";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TuneIcon from "@material-ui/icons/Tune";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-digital-economy-forum-mdcc-1.png"
          alt=""
        />
      </div>
      <div className="line-items">
        <div className="line-item">
          <DashboardIcon />
          <a href="/">Dashboard</a>
        </div>
        <div className="line-item">
          <FastfoodIcon />
          <a href="/">Food & Drink</a>
        </div>
        <div className="line-item">
          <ForumIcon />
          <a href="/">Messages</a>
        </div>
        <div className="line-item">
          <AttachMoneyIcon />
          <a href="/">Bills</a>
        </div>
        <div className="line-item">
          <TuneIcon />
          <a href="/">Settings</a>
        </div>
      </div>
      <div className="user-card">
        <Avatar
          src="https://images-na.ssl-images-amazon.com/images/M/MV5BN2E5ZDMwZDgtMmNhZi00OGQwLTljMDAtODdkMzdlZDkxZWYyL2ltYWdlXkEyXkFqcGdeQXVyMTk4NjI5MjA@._V1_UY256_CR11,0,172,256_AL_.jpg"
          alt="etc"
        />
        <span>Theresa Web</span>
        <span>Waiter • 4h 56m </span>
        <button>Open profile</button>
      </div>
      <div className="hr"></div>
    </div>
  );
}

export default Sidebar;
