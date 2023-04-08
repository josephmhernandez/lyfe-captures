import Orientation from "./Orientation";
import Colors from "./Colors";
import Pin from "./Pin";
import Text from "./Text";

import classes from "./AccordionDemo.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

import { Accordion, Icon } from "semantic-ui-react";

const DemoAccordion = () => {
  const textPrimary = useSelector((state) => state.map.textPrimary);
  const textSecondary = useSelector((state) => state.map.textSecondary);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const curr_activeIndex = activeIndex;
    const newIndex = curr_activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    // <div className={classes.accordion}>
    <div className={classes.wholeScreen}>
      <Accordion fluid styled>
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
export default DemoAccordion;
