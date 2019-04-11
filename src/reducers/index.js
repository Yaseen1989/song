import { combineReducers } from "redux";

const songListReducer = () => {
  return [
    { title: "Bye Bye Bye", Duration: "2:22" },
    { title: "Beatfuil Day", Duration: "3:12" },
    { title: "B.O.B", Duration: "1:52" },
    { title: "Stan", Duration: "4:02" }
  ];
};

const songSelectedReducer = (selectedsong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedsong;
};

export default combineReducers({
  songs: songListReducer,
  selectedsong: songSelectedReducer
});
