import Card from "../UI/Card";
import styles from "./Pricing.module.css";
import Button from "../UI/Button";
import { AiOutlineCheck } from "react-icons/ai";

function PricingItem(props) {
  const pricingBtnHandler = () => {
    if (props.btnText === "try free") return "/login?mode=signup";
    else return "#";
  };
  return (
    <div className={styles["pricing__card"]}>
      <div className={styles["pricing__card--front"]}>
        <div className={styles["pricing__header"]}>
          <h3 className={styles["pricing--heading--tertiary"]}>{props.plan}</h3>
          <span className={styles["pricing--price"]}>{props.price}</span>
        </div>

        <div className={styles["pricing__list"]}>
          <ul>
            <li>
              {" "}
              <AiOutlineCheck
                style={{
                  color: "#343a40",
                  fontSize: "24px",
                }}
              />
              <span>shuffle play</span>
            </li>
            <li>
              {" "}
              {props.plan === "free" ? (
                <AiOutlineCheck
                  style={{
                    color: "#adb5bd",
                    fontSize: "24px",
                  }}
                />
              ) : (
                <AiOutlineCheck
                  style={{
                    color: "#343a40",
                    fontSize: "24px",
                  }}
                />
              )}{" "}
              <span className={props.plan === "free" ? styles.excluded : ""}>
                ad free
              </span>
            </li>
            <li>
              {" "}
              {props.plan === "free" ? (
                <AiOutlineCheck
                  style={{
                    color: "#adb5bd",
                    fontSize: "24px",
                  }}
                />
              ) : (
                <AiOutlineCheck
                  style={{
                    color: "#343a40",
                    fontSize: "24px",
                  }}
                />
              )}{" "}
              <span className={props.plan === "free" ? styles.excluded : ""}>
                unlimited access
              </span>
            </li>
            <li>
              {" "}
              {props.plan === "free" ? (
                <AiOutlineCheck
                  style={{
                    color: "#adb5bd",
                    fontSize: "24px",
                  }}
                />
              ) : (
                <AiOutlineCheck
                  style={{
                    color: "#343a40",
                    fontSize: "24px",
                  }}
                />
              )}{" "}
              <span className={props.plan === "free" ? styles.excluded : ""}>
                high quality audio
              </span>
            </li>
            <li>
              {" "}
              {props.plan === "free" ? (
                <AiOutlineCheck
                  style={{
                    color: "#adb5bd",
                    fontSize: "24px",
                  }}
                />
              ) : (
                <AiOutlineCheck
                  style={{
                    color: "#343a40",
                    fontSize: "24px",
                  }}
                />
              )}{" "}
              <span className={props.plan === "free" ? styles.excluded : ""}>
                listen offline
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["pricing__card--back"]}>
        <Button
          link={`${props.btnText === "try free" ? "/login?mode=signup" : "#"}`}
        >
          {props.btnText}
        </Button>
      </div>
    </div>
  );
}

export default PricingItem;
