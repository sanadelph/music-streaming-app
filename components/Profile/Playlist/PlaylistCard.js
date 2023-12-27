import styles from "./PlaylistCard.module.css";

function PlaylistCard(props) {
  return (
    <div className={styles["playlist__card"]}>
      <div className={styles["playlist__img--box"]}>
        <img src={props.image} />
      </div>
      <p className={styles["playlist__title"]}>{props.title}</p>
    </div>
  );
}
export default PlaylistCard;
