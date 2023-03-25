import Image from "next/image";
import { Segment } from "semantic-ui-react";
import classes from "./sizes.module.css";

const Sizes = () => {
  return (
    <div className={classes.sizes}>
      <Segment raised className={classes.sizesSegment}>
        <h1>Size Guide</h1>
        <div>
          <p>
            We’ve added this sizing guide to give you a better understanding of
            how your art will look! Currently we’re only offering 24’’ by 36’’
            prints. These are printed on 1/4 inch acrylic. If you have a special
            request on sizing let us know! This is typical. We will try our best
            to accommodate!
          </p>

          <Image
            className="ui fluid image"
            src="images/EFrameSizingGuide.png"
            alt="Sizes"
            height="1741"
            width="2612"
          />
        </div>
        <h1>Acrylic Dimensions</h1>
        <div>
          <Image
            className="ui fluid image"
            src="images/dimensions24x36.png"
            alt="24x36 Poster Dimensions"
            width="2304"
            height="1152"
          />
        </div>
      </Segment>
    </div>
  );
};
export default Sizes;
