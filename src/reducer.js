export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finished developing...
  token:
    "BQCXh8q_66H46wVy4itHiBC2y6Gg-HeAn8LlUFS6JU3alL3N-nsAxBdUTB2LqgYTgDs63Z69lRwORIWO-tQzK_v6OV7a_R4x2rjhSdyPIBQ1Z1IX_tDUGp-1jwrhRrx-yt2WalMrqruXes0SjbhQT6Iky4l_wgwzqDfllpiHCnY7aWqULjRq",
};

const reducer = (state, action) => {
  console.log(action);
  //Action = type, [payload]-- contains multiple values depending on what is passed

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
