import { useMediaQuery } from "../hooks/useMediaQuery";
import { useRouter } from "next/router";
import Image from "next/image";
import { getPublicImage } from "../utils/awsFunctions";
import { useEffect, useState } from "react";
import ShopNowBanner from "../components/product/ShopNowBanner";
import TableAnalysis from "../components/ui/TableAnalysis/TableAnalysis";
import ClickThroughPhotos from "../components/ui/ClickThroughPhotos/ClickThroughPhotos";
import MediaRender from "../components/ui/mediaRender/MediaRender";
import { Button } from "flowbite-react";
import Gallery from "../components/gallery/Gallery";

export default function Home(props) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [homepageBanner, setHomepageBanner] = useState(undefined);
  // const [homepageBannerBlur, setHomepageBannerBlur] = useState([]);
  const [videoHowTo, setVideoHowTo] = useState(undefined);
  const router = useRouter();

  let videoMediaPayload = undefined;

  useEffect(() => {
    if (!homepageBanner) {
      if (isMobile) {
        getPublicImage("Homepage/reg-banner-mobile.png").then((file) => {
          setHomepageBanner([file]);
        });
      } else {
        getPublicImage("Homepage/reg-banner.png").then((file) => {
          console.log("file", file);
          setHomepageBanner([file]);
        });
      }
    }
    // getPublicImage("Homepage/reg-banner-blur.png").then((file) => {
    //   setHomepageBannerBlur((prev) => [...prev, file]);
    // });
    if (!videoHowTo) {
      getPublicImage("how-to-vid-white-bg.mp4").then((file) => {
        setVideoHowTo([file]);
        videoMediaPayload = {
          type: "video",
          src: [file],
        };
      });
    }
  }, []);

  return (
    <div>
      {homepageBanner && (
        <ShopNowBanner to="/maps" src={homepageBanner} alt="" />
      )}
      <div className="text-center p-[2vh]">
        <h1 className=" opacity-80 text-base text-3xl md:text-3xl lg:text-3xl">
          Stunning decor at an affordable price
        </h1>
      </div>
      <div className="lg:w-3/5 md:w-3/5 sm:w-10/12  mx-auto pb-[5vh]">
        <div className="px-[1vh]  relative flex flex-col items-center justify-center">
          <Image
            className=""
            src="/images/design.svg"
            alt="Design Your Map"
            width={1200}
            height={200}
          />
        </div>

        {/* Lottie file animation  */}
        {/* <div className="h-screen h-1/2 min-h-25vh"> */}
        <div className="p-[5vh] ">
          <ClickThroughPhotos />
        </div>
        {/* </div> */}
        <div className="flex flex-col items-center justify-center px-[5vh]">
          <p className="lg:w-1/2 opacity-75 text-base leading-relaxed sm:text-lg md:text-xl">
            Wall art can cost thousands of dollars. Decorate with map art for a
            more personalized, cost efficient style
          </p>
        </div>

        {/* Steps */}
        {videoHowTo && (
          <div className="flex flex-col items-center justify-center p-[3vh] mx-auto max-w-2xl">
            <MediaRender
              media={{
                type: "video",
                src: videoHowTo,
              }}
            />
          </div>
        )}

        <div className="flex flex-col items-center justify-center pt-[1vh] pb-[3vh]">
          <Button
            size="xl"
            gradientDuoTone="purpleToBlue"
            onClick={() => router.push("/maps")}
          >
            Create Now
          </Button>
        </div>

        {/* Market Analysis */}
        <div className="flex flex-col items-center justify-center p-[3vh] ">
          <h1 className="font-bold p-[1vh] text-center font-bold text-3xl md:text-4xl lg:text-5xl">
            Dive into the market
          </h1>
          <p className="text-lg opacity-50 sm:text-lg md:text-xl">
            It's not a close race...
          </p>
          <TableAnalysis />
        </div>

        {/* Your Map Package */}
        <div className="flex flex-col items-center justify-center pb-[3vh]">
          <h1 className="font-bold p-[1vh] text-center font-bold text-3xl md:text-4xl lg:text-5xl">
            Your Map Package
          </h1>
          {/* list of perks */}
          <ul className="text-center sm:text-lg md:text-xl">
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>32" 24" Vibrant Acrylic Print 🌇</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Free Floating rame (attached) 🖼️ </span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Free Hanging Kit 🛠️ </span>
            </li>
            <ul className="list-disc">
              <li className="flex items-center space-x-3 rtl:space-x-reverse pl-8">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Gloves (no finger prints) 🙂</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse pl-8">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>French Cleat</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse pl-8">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span>Screws</span>
              </li>
            </ul>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>Free Continental US Shipping 🚛</span>
            </li>
          </ul>
        </div>

        {/* Tell Your Story */}
        <div className="flex flex-col px-[5vh] py-[3vh]">
          <h1 className="font-bold text-base font-bold text-3xl md:text-4xl lg:text-5xl py-[1vh]">
            Tell Your Story
          </h1>
          <p className=" sm:text-lg md:text-xl">
            Map art captures your own journey. Map art is completely unique to
            your story. Let your artwork serve as reminder where you come from
            and where you've been. No one has the same story. Depict your story
            as a focal point in your room. The high quality print and materials
            will elevate any space. If you don't feel like we haven't given you
            enough tools, we are happy to create your map in our studio.
          </p>
        </div>

        {/* Why Acrylic */}
        <div className="flex flex-col px-[5vh] py-[3vh]">
          <h1 className="font-bold text-base font-bold text-3xl md:text-4xl lg:text-5xl py-[1vh]">
            Why Acrylic?
          </h1>
          <p className="sm:text-lg md:text-xl">
            Long story short, if it's good enough for a $10,000 print, it's good
            enough for us. We don't want your map art to be a wall filler. Your
            art will be a focal point in your room. With Acrylic, we're able to
            print vibrant colors with high definition precision. We buy acrylic
            in bulk from our trusted suppliers to ensure that the cost savings
            will be passed to you.
          </p>
        </div>

        {/* Why Us */}
        <div className="flex flex-col px-[5vh] py-[3vh]">
          <h1 className="font-bold text-base font-bold text-3xl md:text-4xl lg:text-5xl py-[1vh]">
            Why Us?
          </h1>
          <p className="sm:text-lg md:text-xl">
            {`Your request will be handled by a real person. We're not a 
            faceless corporation. We're a small team of people who are passionate 
            about delivering unique and meaningful art. We're here to help you 
            tell your story. On top of our 100% satisfaction guarantee, we offer 
            free shipping and have worked with local suppliers to ensure that we 
            can offer the best price possible.`}
          </p>
        </div>

        {/* Row of two buttons. Design a Map and Get Inspired */}
        <div className="flex flex-row items-center justify-center pb-[3vh] gap-10">
          <Button
            size="xl"
            gradientDuoTone="purpleToBlue"
            onClick={() => router.push("/maps")}
          >
            Design your Map
          </Button>
          <Button
            size="xl"
            gradientDuoTone="purpleToBlue"
            onClick={() => router.push("/gallery")}
          >
            Get Inspired
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center px-[3vh]">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

// Home.Layout = Layout;

// Need this here to get the current device that the user is on.
// Can't have getInitialProps in the component itself. It must be on the page component.
// Home.getInitialProps = async (ctx) => {
//   let isMobileView = await (ctx.req
//     ? ctx.req.headers["user-agent"]
//     : navigator.userAgent
//   ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

//   //Returning the isMobileView as a prop to the component for further use.
//   return {
//     isMobileView: Boolean(isMobileView),
//   };
// };

// export default MapPage;

// function renderComp() {
//   const isMobile = useMediaQuery("(max-width: 600px)");

//   if (isMobile) {
//     return (
//       <Fragment>
//         <MapsLandingPageMobile />
//       </Fragment>
//     );
//   }

//   return (
//     <Fragment>
//       <MapsLandingPage />
//     </Fragment>
//   );
// }
