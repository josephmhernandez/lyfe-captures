import Image from "next/image";

const MediaRender = ({ media }) => {
  // If media is a video then render video
  // If media is an image then render image
  // If media is an array of images then render image slider
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
          // backgroundColor: "black",
        }}
      >
        <video
          // className={classes.media}
          src={media.src}
          autoPlay
          loop
          muted
          playsInline
          style={{
            // backgroundColor: "",
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
        // className={classes.media}
        src={media.src}
        height={500}
        width={500}
        alt="layout responsive"
        sizes="(max-width: 768px) 50vw,(max-width: 1200px) 50vw, 50vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        placeholder="blur"
        blurDataURL="/images/blur/Hawaii-blur.png"
      />
    );
  }
  // To Do: Fix this
  // if (media.type === "imageSlider") {
  //   const media_list = media.src;
  //   return <ImageRotator media={media_list} />;
  // }
};

export default MediaRender;
