import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { ActionIcon, Radio } from "@mantine/core";
import classes from './Colors.module.css';
import { ReactComponent as WhiteBlackIcon } from "/Users/joseph/Documents/workspace/lyfe-captures/lyfe-captures/public/whiteBlackSquareIcon.svg";
import {ColorIconPathMap} from '../MapFolder/MapConstants';
const Colors = () => {
  const [color, setColor] = React.useState("white-black"); // default color
  const iconSize = 50;

  const iconPathMap = ColorIconPathMap;

  const colorStyles = ["white-black", "black-white"];

  const colorChange = (event) => {};

  return (
    <div className={classes.container}>
      {colorStyles.map((color) => {
        return (
          <ActionIcon key={color} onClick={colorChange} size={iconSize} value={color}>
            {/* <div className="hover:cursor-pointer flex justify-center items-center"> */}
            <div className={classes.color}>
              <Image
                src={iconPathMap[color]}
                layout='fill'
                v={color}
              />
            </div>
          </ActionIcon>
        );
      })}
    </div>
  );

};

export default Colors;
