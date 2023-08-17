import CreateMap from "../../components/createMap/CreateMap";
import SpecialRequestModal from "../../components/ui/SpecialRequestModal";
import { useState } from "react";

const CreateMapSpecialRequest = () => {
  const [openRequestModal, setOpenRequestModal] = useState(false);
  const handleSpecialRequest = () => {
    // Display Modal with form.
    setOpenRequestModal(true);
  };

  return (
    <div>
      <h1>
        Design Your Map here and send us any special requests. A copy of the map
        will be emailed to us to check out so this gives us a starting place for
        designs!
      </h1>
      <p>
        We love to hear from our customers! If you have any special requests,
        please email us at {`${process.env.EMAIL_SPECIAL_REQUESTS}`} and we will
        get back to you within 24 hours.
      </p>

      <SpecialRequestModal
        open={openRequestModal}
        onClose={() => {
          setOpenRequestModal(false);
        }}
      />
      <CreateMap
        buttonText="Make Special Request"
        buttonPushHandler={handleSpecialRequest}
      />
    </div>
  );
};

export default CreateMapSpecialRequest;
