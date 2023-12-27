import Link from "next/link";
import styles from "./Dashboard.module.css";
import LikedSongs from "./LikedSongs";
import React from "react";

function Dashboard({ children }) {
  return (
    <section className={styles["dashboard__container"]}>{children}</section>
  );
}
export default Dashboard;
