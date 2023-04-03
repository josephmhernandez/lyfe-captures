const DUMMY_PROMO_TEXT =
  "Pre-Launch Sale! - All Maps $499! - 99 left - Everything ships May 15th";
import classes from "./PromoBanner.module.css";

const PromoBanner = () => {
  return (
    <div className={classes.container}>
      <p>{DUMMY_PROMO_TEXT}</p>
    </div>
  );
};

export default PromoBanner;
