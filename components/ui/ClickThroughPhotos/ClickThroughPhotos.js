import Lottie from "lottie-react";
import questionMarkAnimation from "../../../lib/animations/question-mark.json";
import pressToDecorateAnimation from "../../../lib/animations/press-to-decorate.json";
import { useState } from "react";
import { useEffect } from "react";
import { getPublicImage } from "../../../utils/awsFunctions";
const emptyRoomPhoto = "Homepage/press-to-decorate/empty.png";

const photoFiles = [
  "Homepage/press-to-decorate/dallas.png",
  "Homepage/press-to-decorate/denver.png",
  "Homepage/press-to-decorate/houston.png",
  "Homepage/press-to-decorate/los-angeles.png",
  "Homepage/press-to-decorate/nashville.png",
  "Homepage/press-to-decorate/seattle.png",
];

const ClickThroughPhotos = () => {
  // Component with lottile file animation over multiple pictures. On click of the div, the next picture is shown
  const [clicker, setClicker] = useState(undefined);
  const [photos, setPhotos] = useState([]);
  const [emptyRoomImg, setEmptyRoomImg] = useState(undefined);
  useEffect(() => {
    if (!emptyRoomImg) {
      getPublicImage(emptyRoomPhoto).then((file) => {
        setEmptyRoomImg(file);
        setClicker(-1);
      });
    }
    if (photos.length === 0) {
      for (let i = 0; i < photoFiles.length; i++) {
        getPublicImage(photoFiles[i]).then((file) => {
          photos.push(file);
        });
      }
    }
  }, []);

  useEffect(() => {}, [clicker]);

  const handleClick = () => {
    if (clicker === undefined) {
      return;
    }

    if (clicker >= photos.length - 1) {
      setClicker(-1);
      return;
    }
    setClicker((prev) => prev + 1);
  };

  return (
    // <>
    <div
      onClick={handleClick}
      className="relative flex flex-col items-center justify-center mx-auto "
    >
      <div className="aspect-ratio-1x1 relative overflow-hidden rounded-lg shadow-md myclickable-div mx-auto max-w-2xl">
        <Lottie
          hidden={clicker !== undefined && clicker !== -1}
          className={`absolute inset-0 w-full z-20`}
          animationData={questionMarkAnimation}
        />
        <img
          className="w-full h-full mx-auto"
          src={
            clicker === undefined
              ? null
              : clicker === -1
              ? emptyRoomImg
              : photos[clicker]
          }
          alt="Decorate Your Space"
        />
      </div>
      <div className="lg:w-1/3 w-4/5 py-[2vh] flex flex-col items-center justify-center myclickable-div">
        <Lottie animationData={pressToDecorateAnimation} />
      </div>
    </div>
    // </>
  );
};
export default ClickThroughPhotos;
