import GalleryCard from "../../components/gallery/GalleryCard";
import { GALLERY_IMG_LIST } from "../../constants/GalleryConstants";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import dynamic from "next/dynamic";

import classes from "./GalleryBrowseAll.module.css";
import { Button } from "flowbite-react";
import SpecialRequestModal from "../../components/ui/SpecialRequestModal";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const GalleryBrowseAll = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  let galleryCards = GALLERY_IMG_LIST;

  const router = useRouter();
  // const ActionPanel = dynamic(
  //   () => import("../../components/gallery/ActionPanel"),
  //   {
  //     ssr: false,
  //   }
  // );

  const [openSpecialRequestModal, setOpenSpecialRequestModal] = useState(false);

  const handleSpecialRequestClose = (response) => {
    // Response if the response from the api to send special request
    if (response.status === 200) {
      toast.success("Your request has been sent");
    }

    if (response.status === 500) {
      toast.error(
        `There was an error sending your request. Please email us at ${process.env.NEXT_PUBLIC_EMAIL}`
      );
    }

    setOpenSpecialRequestModal(false);
  };

  return (
    <div className="container mx-auto">
      <SpecialRequestModal
        open={openSpecialRequestModal}
        onClose={handleSpecialRequestClose}
      />
      <div className="flex flex-col top-0 opacity-100 bg-primary-white-bg z-10 p-[2vh]">
        <h1 className="w-full text-lg font-bold text-center">
          {`Get inspired from our designs! Customize your own, or send us your ideas! Our design team will help you out`}
        </h1>
        <h1 className="w-full text-lg font-bold p-[0vh] text-center">
          {`If it's a new design we might add it to our gallery and send you a free print!`}
        </h1>
        <div className="flex flex-row justify-center py-[1vh] gap-10">
          <Button
            size="xl"
            gradientDuoTone="purpleToBlue"
            onClick={() => router.push("/maps")}
          >
            Create Now
          </Button>
          <Button
            size="xl"
            gradientDuoTone="purpleToBlue"
            onClick={() => {
              setOpenSpecialRequestModal(true);
            }}
          >
            Send Request
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center text-center justify-center">
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
