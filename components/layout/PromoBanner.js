const DUMMY_PROMO_TEXT = "FREE August Giveaway - Enter Now!";
import OfferModal from "../ui/OfferModal";
import classes from "./PromoBanner.module.css";
import { Button } from "semantic-ui-react";
import { useState } from "react";
const PromoBanner = () => {
  const [open, setOpen] = useState(false);

  const handleOpenPromoModal = () => {
    setOpen(true);
  };

  return (
    <div className={classes.container}>
      <OfferModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <div className={classes.child}>
        <p>{DUMMY_PROMO_TEXT}</p>
      </div>
      {/* Button to open Promotion Modal */}
      <Button
        style={{
          "background-color": "var(--buy-now-btn-color)",
          color: "var(--color-primary)",
          "border-radius": "100px",
          "font-family": "var(--page-heading-font-family)",
        }}
        onClick={handleOpenPromoModal}
      >
        Enter Giveaway
      </Button>
    </div>
  );
};

export default PromoBanner;
