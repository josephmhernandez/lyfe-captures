import ActionPanel from "../../components/gallery/ActionPanel";
import GalleryCard from "../../components/gallery/GalleryCard";
import { GALLERY_IMG_LIST } from "../../constants/GalleryConstants";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { getPublicImage } from "../../utils/awsFunctions";

import classes from "./GalleryBrowseAll.module.css";

const GalleryBrowseAll = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  let galleryCards = GALLERY_IMG_LIST;

  return (
    <div>
      <ActionPanel />
      <div className={classes.content}>
        <p style={{ width: "90%" }}>
          Get inspired from our designs! Customize your own, or send us your
          ideas and our design team will help you out
        </p>

        <div className={classes.gallery}>
          {/* map gallery cards */}
          {galleryCards.map((card) => {
            return (
              <GalleryCard
                id={card.id}
                src={card.image_url[0]}
                title={card.title}
                description={card.description}
                isMobile={isMobile}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default GalleryBrowseAll;
