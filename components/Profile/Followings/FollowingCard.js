import styles from "./FollowingCard.module.css";
function FollowingCard(props) {
  return (
    <div className={styles["following__card"]}>
      <div className={styles["folowing__img--box"]}>
        <img src={props.image} />
      </div>
      <p className={styles["following__title"]}>{props.title}</p>
    </div>
  );
}
export default FollowingCard;
