import CreateMap from "../../components/createMap/CreateMap";
import { useMediaQuery } from "@mantine/hooks";
import DemoCreateMap from "../../components/createMap/MobileDemo/DemoCreateMap";
import { useDispatch } from "react-redux";
import mapSlice from "../../store/map-slice";

const MapPage = (props) => {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery("(max-width: 600px)");

  if (typeof window !== "undefined") {
    if (props.isMobileView || isMobile) {
      dispatch(mapSlice.actions.setZoomOffset(3));
      // Send to mobile create now Demo
      return <DemoCreateMap />;
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
