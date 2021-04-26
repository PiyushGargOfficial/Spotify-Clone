import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import Player from "./Components/Player";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";

//Creates an instance so that we can communicate with spotify back and forth.
const spotify = new SpotifyWebApi();

function App() {
  //We used the useState before connecting the Context API, but now we used the token state in the data layer itself.
  // const [token, setToken] = useState(null);
  const [{ token }, dispatch] = useStateValue();

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    //We don't want the token to be sitting in the URL forever for security reasons.
    window.location.hash = "";

    //Since there is a name clash, some production companies use a "_" in front of the variable.
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //Gives the key to the spotify wrapper and allows us to talk to the spotify api.
      spotify.setAccessToken(_token);

      //Gives us the user details based on the token provided.
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      //Get User Playlists
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
