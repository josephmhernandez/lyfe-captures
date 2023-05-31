import classes from "./DescriptionTab.module.css";
import MediaRender from "../ui/mediaRender/MediaRender";

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

  const mediaContent = {
    type: "image",
    src: img,
  };

  if (img_first_flag === true) {
    return (
      <div className={classes.grid}>
        <div className={classes.flexChild}>
          <div className={classes.picContainer}>
            <MediaRender media={mediaContent} />
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
            <MediaRender media={mediaContent} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DescriptionTab;
