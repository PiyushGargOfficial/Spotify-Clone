import React from "react";
import "../CSS/Player.css";
import Body from "./Body";
import Sidebar from "./Sidebar";

function Player() {
  return (
    <div>
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      {/* Footer */}
    </div>
  );
}

export default Player;
