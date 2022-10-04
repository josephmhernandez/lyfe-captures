import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

export const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "var(--purple-dark-color)",
  borderColor: "white",
  fontFamily: "var(--font-family-primary)",
  color: "white",
  "&:hover": {
    backgroundColor: "var(--purple-light-color)",
    borderColor: "var(--purple-dark-color)",
    boxShadow: "none",
  },
});

export const AddToCartButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 2.5,
  backgroundColor: "var(--purple-dark-color)",
  borderColor: "var(--purple-dark-color)",
  fontFamily: "var(--font-family-primary)",
  color: "white",
  "&:hover": {
    backgroundColor: "var(--purple-light-color)",
    borderColor: "var(--purple-dark-color)",
    boxShadow: "none",
  },
});

export const BuyNowButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 3.5,
  backgroundColor: "var(--buy-now-btn-color)",
  borderColor: "var(--buy-now-btn-hover-color)",
  fontFamily: "var(--font-family-primary)",
  color: "white",
  "&:hover": {
    backgroundColor: "var(--buy-now-btn-hover-color)",
    borderColor: "var(--buy-now-btn-color)",
    boxShadow: "none",
  },
});
