import Image from "next/image";
import { Segment } from "semantic-ui-react";
import classes from "./sizes.module.css";
import { getPublicImage } from "../../utils/awsFunctions";
import { useEffect, useState } from "react";

const Sizes = () => {
  const [eframeSizingGuide, setEframeSizingGuide] = useState([]);
  const [dimensionsImg, setDimensionsImg] = useState([]);
  useEffect(() => {
    getPublicImage("aboutus/EFrameSizingGuide.png").then((res) => {
      setEframeSizingGuide(res);
    });

    getPublicImage("aboutus/dimensions24x36.png").then((res) => {
      setDimensionsImg(res);
    });
  }, []);

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
            src={eframeSizingGuide}
            // src="images/eframeSizingGuide.jpg"
            alt="Sizes"
            height="632"
            width="1124"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <h1>Acrylic Dimensions</h1>
        <div>
          <Image
            className="ui fluid image"
            // src="images/dimensions24x36.png"
            src={dimensionsImg}
            alt="24x36 Poster Dimensions"
            width="2304"
            height="1152"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </Segment>
    </div>
  );
};
export default Sizes;
