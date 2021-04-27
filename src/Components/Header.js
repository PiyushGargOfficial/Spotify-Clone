import { Avatar } from "@material-ui/core";
import React from "react";
import "../CSS/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs or Playlists..."
        />
      </div>
      <div className="header__right">
        {/* Material UI */}
        <Avatar src={user?.images[0].url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
