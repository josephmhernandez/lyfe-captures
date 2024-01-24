// import Image from "next/image";
// import classes from "./LandingSection.module.css";
// import ImageRotator from "../ImageRotator/ImageRotator";
// import { useMediaQuery } from "../../../hooks/useMediaQuery";

// {
//   /* Component that has two columns when the screen is large enough but when
//       it is a smaller screen it jumps image up top and then content on the bottom. */
// }

// const MediaRender = ({ media }) => {
//   // If media is a video then render video
//   // If media is an image then render image
//   // If media is an array of images then render image slider
//   if (media === undefined) {
//     return <div></div>;
//   }
//   if (media.type === "video") {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           width: "100%",
//           // backgroundColor: "black",
//         }}
//       >
//         <video
//           className={classes.media}
//           src={media.src}
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             // backgroundColor: "",
//             width: "70%",
//             height: "auto",
//           }}
//         />
//       </div>
//     );
//   }
//   if (media.type === "image") {
//     return (
//       <Image
//         className={classes.media}
//         src={media.src}
//         height={500}
//         width={500}
//         alt="layout responsive"
//         sizes="(max-width: 768px) 50vw,(max-width: 1200px) 50vw, 50vw"
//         style={{
//           width: "100%",
//           height: "auto",
//         }}
//         placeholder="blur"
//         blurDataURL="/images/blur/Hawaii-blur.png"
//       />
//     );
//   }
//   if (media.type === "imageSlider") {
//     const media_list = media.src;
//     return <ImageRotator media={media_list} />;
//   }
// };

// const LandingSection = ({
//   description,
//   media,
//   textFirstFlag,
//   darkBackground,
//   ...props
// }) => {
//   // If width of the screen is less than 768px then render media on top and description on bottom
//   // const isMobile = useMediaQuery("(max-width: 768px)");
//   // if (isMobile) {
//   //   textFirstFlag = false;
//   // }
//   // If width of the screen is greater than 768px then render media on left and description on right
//   // If flag is true then render media on right and description on left

//   let actualStyle = darkBackground ? "dark" : "light";
//   // TO DO:
//   // Fix textFirstFlag. Right now it always has an error because of the order of the elements.

//   // if description is a component then render component

//   return (
//     <div className={`container ${actualStyle}`}>
//       <style jsx>{`
//         .container.dark {
//           background-color: var(--color-primary);
//           color: white;
//           width: 100%;
//         }
//         .container.light {
//           background-color: white;
//           color: var(--color-primary);
//           width: 100%;
//         }
//       `}</style>

//       <div className={classes.container}>
//         <div className={classes.column}>
//           <MediaRender media={media} />
//         </div>

//         <div className={classes.column}>
//           {props.children && (
//             <div className={classes.clearFormat}> {props.children} </div>
//           )}
//           {!props.children && (
//             <div>
//               <h1>{description.heading}</h1>
//               {description.text.map((text) => {
//                 return (
//                   <>
//                     <h2>{text.subheading}</h2>
//                     <p>{text.body}</p>
//                   </>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* {!textFirstFlag && (
//         <div className={classes.container}>
//           <div className={classes.column}>
//             <h1>{description.heading}</h1>
//             {description.text.map((text) => {
//               return (
//                 <>
//                   <h2>{text.subheading}</h2>
//                   <p>{text.body}</p>
//                 </>
//               );
//             })}
//           </div>
//           <div className={classes.column}>
//             <MediaRender media={media} />
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default LandingSection;
