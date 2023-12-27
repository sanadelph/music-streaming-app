import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song }) =>
  isPlaying && activeSong?.name === song.name ? (
    <FaPauseCircle />
  ) : (
    <FaPlayCircle />
  );

export default PlayPause;
