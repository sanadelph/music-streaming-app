import FollowingCard from "./FollowingCard";
import styles from "./Followings.module.css";

function Followings() {
  return (
    <section className={styles["followings__container"]}>
      {/* The followers list added by backend should be mapped
      example: followerslist.map(follower=> {return <FollowingCard image="cover-art.jpg" title="Name" />})*/}
      <FollowingCard image="cover-art.jpg" title="Name" />
      <FollowingCard image="cover-art.jpg" title="Name" />
      <FollowingCard image="cover-art.jpg" title="Name" />
      <FollowingCard image="cover-art.jpg" title="Name" />
    </section>
  );
}
export default Followings;
