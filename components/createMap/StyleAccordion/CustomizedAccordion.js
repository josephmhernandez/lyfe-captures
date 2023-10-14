import * as React from "react";
import Orientation from "./Orientation";
import Colors from "./Colors";
import Background from "../MobileDemo/AccordionDemo/Background";
import Pin from "./Pin";
import Text from "./Text";
import Search from "./Search";
import classes from "./CustomizedAccordion.module.css";
import { useSelector } from "react-redux";

import { Accordion, Icon } from "semantic-ui-react";

const CustomizedAccordions = (props) => {
  const textPrimary = useSelector((state) => state.map.textPrimary);
  const textSecondary = useSelector((state) => state.map.textSecondary);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const curr_activeIndex = props.activeIndex;
    const newIndex = curr_activeIndex === index ? -1 : index;

    props.setActiveIndex(newIndex);
  };

  return (
    <div className={classes.accordion}>
      <Accordion className="ui styled accordion">
        <Accordion.Title
          active={props.activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Location
        </Accordion.Title>

        <Accordion.Content active={props.activeIndex === 0}>
          <Search />
        </Accordion.Content>
        <Accordion.Title
          active={props.activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Size
        </Accordion.Title>
        <Accordion.Content active={props.activeIndex === 1}>
          <Orientation />
        </Accordion.Content>
        <Accordion.Title
          active={props.activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Colors
        </Accordion.Title>
        <Accordion.Content active={props.activeIndex === 2}>
          <Colors />
        </Accordion.Content>
        <Accordion.Title
          active={props.activeIndex === 5}
          index={5}
          onClick={handleClick}
        >
          <span>
            <Icon name="dropdown" />
            Background
            <span className={classes.newTag}>{"New"}</span>
          </span>
        </Accordion.Title>
        <Accordion.Content active={props.activeIndex === 5}>
          <Background />
        </Accordion.Content>
        <Accordion.Title
          active={props.activeIndex === 3}
          index={3}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Pin
        </Accordion.Title>
        <Accordion.Content active={props.activeIndex === 3}>
          <Pin />
        </Accordion.Content>
        <Accordion.Title
          active={props.activeIndex === 4}
          index={4}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Text
        </Accordion.Title>
        <Accordion.Content active={props.activeIndex === 4}>
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
