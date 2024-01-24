// /* Component in Gallery / Browse All designs page that has actions for users to either jump to create map or send an email to the design team. */

// import { useRouter } from "next/router";
// import {
//   getAccordionActionButtonStyle,
//   getAccordionButtonStyle,
//   getActionButtonStyle,
// } from "../../constants/UiConstants";
// import { Button } from "semantic-ui-react";
// import { useMediaQuery } from "../../hooks/useMediaQuery";
// import SpecialRequestModal from "../ui/SpecialRequestModal";
// import { toast } from "react-toastify";
// import { useState } from "react";

// import classes from "./ActionPanel.module.css";

// const ActionPanel = () => {
//   const [openSpecialRequestModal, setOpenSpecialRequestModal] = useState(false);
//   const router = useRouter();
//   const isMobile = useMediaQuery("(max-width: 800px)");

//   const handleSendRequest = () => {
//     setOpenSpecialRequestModal(true);
//   };

//   const handleSpecialRequestClose = (response) => {
//     // Response if the response from the api to send special request
//     if (response.status === 200) {
//       toast.success("Your request has been sent");
//     }

//     if (response.status === 500) {
//       toast.error(
//         `There was an error sending your request. Please email us at ${process.env.NEXT_PUBLIC_EMAIL}`
//       );
//     }

//     setOpenSpecialRequestModal(false);
//   };

//   return (
//     <div>
//       <SpecialRequestModal
//         open={openSpecialRequestModal}
//         onClose={handleSpecialRequestClose}
//       />

//       <div>
//         {!isMobile ? (
//           <div className={classes.ActionPanel}>
//             <h2>Start Your Design</h2>
//             <Button
//               style={getAccordionActionButtonStyle(isMobile)}
//               onClick={() => router.push("/maps")}
//             >
//               Create Now
//             </Button>
//             <h2>
//               Not sure if we can make it? Send us your thoughts and our design
//               team will send you free mock-ups of your design the same day
//             </h2>
//             <Button
//               style={getActionButtonStyle(isMobile)}
//               onClick={handleSendRequest}
//             >
//               Send Request
//             </Button>
//           </div>
//         ) : (
//           <div className={classes.mobilePanel}>
//             <h2>Want a custom design?</h2>
//             <div className={classes.btnRow}>
//               <Button
//                 style={getAccordionActionButtonStyle(isMobile)}
//                 onClick={() => router.push("/maps")}
//               >
//                 Create Now
//               </Button>
//               <Button
//                 style={getAccordionButtonStyle(isMobile)}
//                 onClick={handleSendRequest}
//               >
//                 Send Request
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default ActionPanel;
