import Image from "next/image";
import { Segment } from "semantic-ui-react";
import classes from "./sizes.module.css";

const Sizes = () => {
  return (
    <div className={classes.sizes}>
      <Segment raised className={classes.sizesSegment}>
        <h1>Size Guide</h1>
        <Image
          className="ui fluid image"
          src="images/EFrameSizingGuide.png"
          alt="Sizes"
        />
        <div>
          <p style={{ fontStyle: "italic" }}>
            Currently we are only offering large prints of 24x36 inches. These
            look best in 24x36 in. frames! As we update our print sizes we’ll
            make sure to take note of what frame size works best!
          </p>
          <p>24 x 36 in.</p>
        </div>
        <Image
          className="ui fluid image"
          src="images/24_36_Poster_Dimenstions-small.png"
          alt="24x36 Poster Dimensions"
        />
      </Segment>
    </div>
  );
};
export default Sizes;
