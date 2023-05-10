import Image from "next/image";
import classes from "./LandingSection.module.css";
import { useEffect } from "react";
import ImageRotator from "../ImageRotator/ImageRotator";
import blurImage from "../../../public/images/blur/Hawaii-blur.png";

{
  /* Component that has two columns when the screen is large enough but when 
      it is a smaller screen it jumps image up top and then content on the bottom. */
}

const MediaRender = ({ media }) => {
  if (media === undefined) {
    return <div></div>;
  }
  if (media.type === "video") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <video
          className={classes.media}
          src={media.src}
          autoPlay
          loop
          muted
          playsInline
          style={{
            backgroundColor: "black",
            width: "70%",
            height: "auto",
          }}
        />
      </div>
    );
  }
  if (media.type === "image") {
    return (
      <Image
        className={classes.media}
        src={media.src}
        height={500}
        width={500}
        alt="layout responsive"
        sizes="(max-width: 768px) 85vw,(max-width: 1200px) 100vw, 100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        placeholder="blur"
        blurDataURL="/images/blur/Hawaii-blur.png"
      />
    );
  }
  if (media.type === "imageSlider") {
    const media_list = media.src;
    return <ImageRotator media={media_list} />;
  }
};

const LandingSection = ({ description, media, textFirstFlag }) => {
  // If media is a video then render video
  // If media is an image then render image
  // If media is an array of images then render image slider

  // If width of the screen is less than 768px then render media on top and description on bottom
  // If width of the screen is greater than 768px then render media on left and description on right
  // If flag is true then render media on right and description on left

  // TO DO:
  // if (textFirstFlag) {
  //   return (
  //     <div className={classes.container}>
  //       <div className={classes.column}>
  //         <h1>{description.heading}</h1>
  //         {description.text.map((text) => {
  //           return (
  //             <>
  //               <h2>{text.subheading}</h2>
  //               <p>{text.body}</p>
  //             </>
  //           );
  //         })}
  //       </div>
  //       <div className={classes.column}>
  //         <MediaRender media={media} />
  //       </div>
  //     </div>
  //   );
  // }

  // if description is a component then render component

  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <MediaRender media={media} />
      </div>
      <div className={classes.column}>
        <h1>{description.heading}</h1>
        {description.text.map((text) => {
          return (
            <>
              <h2>{text.subheading}</h2>
              <p>{text.body}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LandingSection;
