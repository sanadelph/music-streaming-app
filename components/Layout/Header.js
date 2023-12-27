import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href={{ pathname: "/login", query: { mode: "signup" } }}>
              Sign up
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/login", query: { mode: "login" } }}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
