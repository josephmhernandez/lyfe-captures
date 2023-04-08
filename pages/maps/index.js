import CreateMap from "../../components/createMap/CreateMap";
import MobileModal from "../../components/ui/MobileModal";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";
import DemoCreateMap from "../../components/createMap/MobileDemo/DemoCreateMap";
import { useDispatch } from "react-redux";
import mapSlice from "../../store/map-slice";
const mapCenter = { lat: 38.9072, lng: -77.0369 };
const mapDimension = { width: 700, height: 700 };

const MapPage = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleClose = () => {
    // handling close of modal when user is on mobile.
    router.push("/");
  };

  if (typeof window !== "undefined") {
    if (props.isMobileView || isMobile) {
      dispatch(mapSlice.actions.setZoomOffset(3));
      // Send to mobile create now Demo
      return (
        <DemoCreateMap />

        /* <MobileModal handleClose={handleClose} /> */
      );
    }
  }

  return <CreateMap />;
};

// Need this here to get the current device that the user is on.
// Can't have getInitialProps in the component itself. It must be on the page component.
MapPage.getInitialProps = async (ctx) => {
  let isMobileView = (
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  //Returning the isMobileView as a prop to the component for further use.
  return {
    isMobileView: Boolean(isMobileView),
  };
};

export default MapPage;
