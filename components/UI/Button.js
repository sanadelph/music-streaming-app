import styles from "./Button.module.css";
import Link from "next/link";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} legacyBehavior>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }
  return <button className={styles.btn}>{props.children}</button>;
}
export default Button;
