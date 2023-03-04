import { ClassNames } from "@emotion/react";
import Image from "next/future/image";
import classes from "./DescriptionTab.module.css";

const DescriptionTab = ({ description, img, img_first_flag }) => {
  const DescriptionConent = ({ description }) => {
    const heading = description.heading;
    const descriptions = description.text; // Array of strings

    return (
      <div className={classes.descriptionContent}>
        <h1>{heading}</h1>
        <p>{descriptions}</p>
      </div>
    );
  };

  if (img_first_flag === true) {
    return (
      <div className={classes.grid}>
        <div className={classes.flexChild}>
          <div className={classes.picContainer}>
            <Image className={classes.picStyle} src={img} layout="raw" />
          </div>
        </div>
        <div className={classes.flexChild}>
          <DescriptionConent description={description} />
        </div>
      </div>
    );
  }

  return (
    <div className={classes.grid}>
      <div className={classes.flexChild}>
        <DescriptionConent description={description} />
      </div>

      {img != undefined ? (
        <div className={classes.flexChild}>
          <div className={classes.picContainer}>
            <Image className={classes.picStyle} src={img} layout="raw" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DescriptionTab;
