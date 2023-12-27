import { FaPlayCircle } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import styles from "./Song.module.css";

function Song(props) {
  return (
    <div className={styles["track__div"]}>
      <div className={styles["track__details--box"]}>
        <div className={styles["track__img--box"]}>
          <img src={props.image} />
        </div>
        <div className={styles["track--details"]}>
          <p className={styles["track--title"]}>{props.title}</p>
          <p className={styles["track--artists"]}>{props.artist}</p>
        </div>
      </div>
      <div className={styles["track--icons"]}>
        <FaPlayCircle style={{}} />
        <MdFavorite style={{}} />
      </div>
    </div>
  );
}
export default Song;
