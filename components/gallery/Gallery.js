import { useEffect, useState } from "react";
import { getPublicImage } from "../../utils/awsFunctions";

const Gallery = () => {
  const [vertAspen, setVertAspen] = useState(undefined);
  const [vertSeattle, setVertSeattle] = useState(undefined);
  const [vertSanFran, setVertSanFran] = useState(undefined);
  const [imgSeattle, setImgSeattle] = useState(undefined);
  const [imgHawaii, setImgHawaii] = useState(undefined);
  const [imgDetroit, setImgDetroit] = useState(undefined);

  const [cornerImgHawaii, setCornerImgHawaii] = useState(undefined);
  const [cornerDallas, setCornerDallas] = useState(undefined);
  const [closeUpPinsImg, setCloseUpPinsImg] = useState(undefined);
  const [backframeImg, setBackframeImg] = useState(undefined);
  const [closeUpWhiteTransit, setCloseUpWhiteTransit] = useState(undefined);
  const [sideImg3D, setSideImg3D] = useState(undefined);

  useEffect(() => {
    if (!vertAspen) {
      getPublicImage("fullTransparent/aspen-wall-2-vert.png").then((file) => {
        setVertAspen(file);
      });
    }
    if (!vertSeattle) {
      getPublicImage("fullTransparent/seattle-wall-2-vert.png").then((file) => {
        setVertSeattle(file);
      });
    }
    if (!vertSanFran) {
      getPublicImage("fullTransparent/sanfran-wall-2-vert.png").then((file) => {
        setVertSanFran(file);
      });
    }
    if (!imgSeattle) {
      getPublicImage("fullTransparent/seattle-wall-horiz.png").then((file) => {
        setImgSeattle(file);
      });
    }

    if (!imgHawaii) {
      getPublicImage("fullTransparent/hawaii-wall-horiz.png").then((file) => {
        setImgHawaii(file);
      });
    }

    if (!imgDetroit) {
      getPublicImage("fullTransparent/detroit-wall-horiz.png").then((file) => {
        setImgDetroit(file);
      });
    }

    if (!cornerImgHawaii) {
      getPublicImage("transparent/hawaii-corner.png").then((file) => {
        setCornerImgHawaii(file);
      });
    }

    if (!cornerDallas) {
      getPublicImage("transparent/dallas-corner.png").then((file) => {
        setCornerDallas(file);
      });
    }

    if (!closeUpPinsImg) {
      getPublicImage(
        "Homepage/description-tab-prod-pictures/close-up-pins-dark-transit.jpg"
      ).then((file) => {
        setCloseUpPinsImg(file);
      });
    }

    if (!backframeImg) {
      getPublicImage(
        "Homepage/description-tab-prod-pictures/backframe-hanging.jpg"
      ).then((file) => {
        setBackframeImg(file);
      });
    }

    if (!closeUpWhiteTransit) {
      getPublicImage(
        "Homepage/description-tab-prod-pictures/corner-transit-white.jpg"
      ).then((file) => {
        setCloseUpWhiteTransit(file);
      });
    }

    if (!sideImg3D) {
      getPublicImage(
        "Homepage/description-tab-prod-pictures/3-d-effect.jpg"
      ).then((file) => {
        setSideImg3D(file);
      });
    }
  }, []);

  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg" src={imgDetroit} alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src={vertAspen} alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src={imgSeattle} alt="" />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={closeUpPinsImg}
            alt=""
          />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src={imgHawaii} alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src={backframeImg} alt="" />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg" src={cornerDallas} alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src={vertSeattle} alt="" />
        </div>
        <div>
          <img class="h-auto max-w-full rounded-lg" src={sideImg3D} alt="" />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img class="h-auto max-w-full rounded-lg" src={vertSanFran} alt="" />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={closeUpWhiteTransit}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={cornerImgHawaii}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
