//Spotify Authorization Logic

//We are not authorizing the users ourself. We are using the Spotify authentication for the user data.

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "2221e62bb57c4039bd37355cfcbc55fd";
const redirectUri = "http://localhost:3000/";

//Scopes are the permissions, we give to the local code from spotify to allow us to do the following things.
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//After we give the permissions on spotify authorization, they send us token back.
export const getTokenFromResponse = () => {
  //Go the the URL and find the hash.
  return window.location.hash
    .substring(1) //break the string at #
    .split("&") //split the remaining string at &
    .reduce((initial, item) => {
      //#accessTOken=mysecret&name=piyush
      var parts = item.split("="); //multiple parts are generated
      initial[parts[0]] = decodeURIComponent(parts[1]); //Our token is present at part 1, but the name of the token is present at part 0.
      //decodeURIComponent = pre-defined function

      return initial;
    }, {}); //initial value of "initial" is empty string
};

//scopes.join joins all the scopes mentioned before by some special character. We are using the ASCII code for space and joining them.
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
//One authenticated, give me back a token.
//A dialogue box appears up.
