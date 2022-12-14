const DUMMY_PROMO_TEXT = "Winter Sale - Get 10% off at checkout!";
import classes from "./PromoBanner.module.css";

const PromoBanner = () => {
  return (
    <div className={classes.container}>
      <p>{DUMMY_PROMO_TEXT}</p>
    </div>
  );
};

export default PromoBanner;
