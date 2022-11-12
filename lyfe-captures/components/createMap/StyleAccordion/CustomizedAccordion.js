import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Orientation from "./Orientation";
import Colors from "./Colors";
import Pin from "./Pin";
import Text from "./Text";
import Search from "./Search";
import classes from "./CustomizedAccordion.module.css";
import { useSelector } from "react-redux";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `0px solid var(--purple-dark-color)`,
  "&:not(:first-child)": {
    borderTop: `1px solid var(--purple-dark-color)`,
  },

  borderBottom: `1px solid var(--purple-dark-color)`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "2px solid var(--purple-dark-color)",
}));

const CustomizedAccordions = () => {
  const textPrimary = useSelector((state) => state.map.textPrimary);
  const textSecondary = useSelector((state) => state.map.textSecondary); 
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className={classes.eachAccordion}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography className={classes.text}>Location</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.eachAccordion}>
          <Search />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          className={classes.eachAccordion}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography className={classes.text}>Orientation</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.eachAccordion}>
          <Orientation />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          className={classes.eachAccordion}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography className={classes.text}>Color</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.eachAccordion}>
          <Colors />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          className={classes.eachAccordion}
          aria-controls="panel5d-content"
          id="panel5d-header"
        >
          <Typography className={classes.text}>Add Pin</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.eachAccordion}>
          <Pin />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          className={classes.eachAccordion}
          aria-controls="panel6d-content"
          id="panel6d-header"
        >
          <Typography className={classes.text}>Text</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.eachAccordion}>
          <Text defaultPrimaryText={textPrimary} defaultSecondaryText={textSecondary} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default CustomizedAccordions;
