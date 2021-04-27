import React from "react";
import "../CSS/Player.css";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div>
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
