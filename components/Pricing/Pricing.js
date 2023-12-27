import styles from "./Pricing.module.css";
import Card from "../UI/Card";
import PricingItem from "./PricingItem";

function Pricing() {
  return (
    <section className={styles.pricing}>
      <h2 className={styles["pricing__heading--secondary"]}>
        discover our plans
      </h2>
      <div className={styles["pricing--container"]}>
        <PricingItem plan="free" price="$0.00" btnText="try free" />

        <PricingItem plan="Premium" price="$9.99" btnText="buy now" />
      </div>
    </section>
  );
}
export default Pricing;
