const DUMMY_PROMO_TEXT =
  "Limited Inventory Sale - All Maps $499! - 99 left - Everything ships May 30th";
import classes from "./PromoBanner.module.css";

const PromoBanner = () => {
  return (
    <div className={classes.container}>
      <p>{DUMMY_PROMO_TEXT}</p>
    </div>
  );
};

export default PromoBanner;
