import React, { useState } from "react";
import styles from "./SongCardItem.module.css";
import { FaRegPlayCircle } from "react-icons/fa";
import PlayPause from "@/components/Features/PlayPause";

function SongCardItem({ imgSrc, songTitle, songArtist }) {
  return (
    <div className={styles["song__card"]}>
      <div className={styles["song__icon"]}>
        <PlayPause isPlaying={false} activeSong="pomething" song={songTitle} />
      </div>
      <div className={styles["song__img--box"]}>
        <img src={imgSrc} />
      </div>
      <div className={styles["song--details"]}>
        <p className={styles["song__title"]}>{songTitle}</p>
        <p className={styles["song__artist"]}>{songArtist}</p>
      </div>
    </div>
  );
}
export default SongCardItem;
