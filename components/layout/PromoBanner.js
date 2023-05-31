const DUMMY_PROMO_TEXT = "Spring Season Sale - All Maps $499! - 99 left";
import classes from "./PromoBanner.module.css";

const PromoBanner = () => {
  return (
    <div className={classes.container}>
      <p>{DUMMY_PROMO_TEXT}</p>
    </div>
  );
};

export default PromoBanner;
