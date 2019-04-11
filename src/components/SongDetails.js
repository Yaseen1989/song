import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (!song) {
    return <div>Select a Song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      Title: {song.title}
      <br />
      Duration: {song.Duration}
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedsong };
};

export default connect(mapStateToProps)(SongDetails);
