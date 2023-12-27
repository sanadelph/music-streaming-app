import React from "react";
import styles from "./DashboardLayout.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function DashboardLayout() {
  const currentQuery = useSearchParams().get("module");
  return (
    <section className={styles["dashboard__section"]}>
      <div className={styles["dashboard__header"]}>
        <div className={styles["dashboard__user--info"]}>
          <img src="/profile-picture.jpg" />
          <h2 className={styles["heading--secondary"]}>Name</h2>
        </div>
        <nav className={styles["dashboard__nav"]}>
          <Link href="/">Home</Link>
          <Link href="#">Logout</Link>
        </nav>
      </div>
      <ul className={styles["dashboard__list"]}>
        <li>
          <Link
            href="/profile?module=liked"
            className={`${currentQuery === "liked" ? styles["active"] : ""}`}
          >
            Liked
          </Link>
        </li>
        <li>
          <Link
            className={`${
              currentQuery === "playlists" ? styles["active"] : ""
            }`}
            href="/profile?module=playlists"
          >
            Playlists
          </Link>
        </li>
        <li>
          <Link
            className={`${
              currentQuery === "followings" ? styles["active"] : ""
            }`}
            href="/profile?module=followings"
          >
            Followings
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default DashboardLayout;
