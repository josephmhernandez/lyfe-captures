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

import { Accordion, Icon } from "semantic-ui-react";

const CustomizedAccordions = () => {
  const textPrimary = useSelector((state) => state.map.textPrimary);
  const textSecondary = useSelector((state) => state.map.textSecondary);
  const [expanded, setExpanded] = React.useState("panel1");
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const curr_activeIndex = activeIndex;
    const newIndex = curr_activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <div className={classes.accordion}>
      <Accordion className="ui styled accordion">
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Location
        </Accordion.Title>

        <Accordion.Content active={activeIndex === 0}>
          <Search />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Orientation
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <Orientation />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Colors
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <Colors />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Pin
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <Pin />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Text
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <Text
            defaultPrimaryText={textPrimary}
            defaultSecondaryText={textSecondary}
          />
        </Accordion.Content>
      </Accordion>
    </div>
  );
};
export default CustomizedAccordions;
