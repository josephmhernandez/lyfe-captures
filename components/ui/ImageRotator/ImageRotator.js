/* React component that will take in a list of image urls from amplify studio and output an image that rotates to each image in the array after every 4 seconds*/

import { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./ImageRotator.module.css";

const ImageRotator = (props) => {
  const length_arr = props.media.length;
  const [picIndex, setPicIndex] = useState(0);
  const [cssStyle, setCssStyle] = useState({});

  const neededCssStyle = {
    width: "100%",
    height: "auto",
  };

  const fadeInCss = {
    ...neededCssStyle,
    ...{
      visibility: "visible",
      opacity: 1,
      transition: "opacity 2s linear",
    },
  };

  const fadeOutCss = {
    ...neededCssStyle,
    ...{
      width: "100%",
      height: "auto",
      visibility: "hidden",
      opacity: 0,
      transition: "visibility 0s 2s, opacity 2s linear",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPicIndex((picIndex + 1) % Number(length_arr));
      setCssStyle(fadeInCss);
      const interval2 = setInterval(() => {
        setCssStyle(fadeOutCss);
        clearInterval(interval2);
      }, 6000);
    }, 8000);
    return () => clearInterval(interval);
  }, [picIndex, length_arr]);

  return (
    <div className={classes.fadeInImage}>
      {props.media[picIndex] && (
        <Image
          src={props.media[picIndex]}
          height={700}
          width={700}
          alt="layout responsive"
          sizes="(max-width: 768px) 85vw,(max-width: 1200px) 100vw, 100vw"
          style={cssStyle}
        />
      )}
    </div>
  );
};
export default ImageRotator;
