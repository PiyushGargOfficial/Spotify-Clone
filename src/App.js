import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

//Creates an instance so that we can communicate with spotify back and forth.
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    //We don't want the token to be sitting in the URL forever for security reasons.
    window.location.hash = "";

    //Since there is a name clash, some production companies use a "_" in front of the variable.
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);

      //Gives the key to the spotify wrapper and allows us to talk to the spotify api.
      spotify.setAccessToken(_token);

      //Gives us the user details based on the token provided.
      spotify.getMe().then((user) => {
        console.log("🧔", user);
      });
    }
  }, []);

  return <div className="app">{token ? <h1>Logged In</h1> : <Login />}</div>;
}

export default App;
