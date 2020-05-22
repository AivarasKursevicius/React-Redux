import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Eminem - Not Afraid", duration: "3:23" },
    { title: "50 cents - Candy Shop", duration: "4:05" },
    { title: "Beatrich - Pardon Me", duration: "2:56" },
    { title: "GJan - It wasn't easy", duration: "3:34" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
