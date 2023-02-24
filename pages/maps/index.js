import Layout from "../../components/layout/Layout";
import CreateMap from "../../components/createMap/CreateMap";
import MobileModal from "../../components/ui/MobileModal";
import classes from "./index.module.css";
import { useRouter } from "next/router";
// import Map from "../../components/createMap/MapFolder/Map";

const mapCenter = { lat: 38.9072, lng: -77.0369 };
const mapDimension = { width: 700, height: 700 };

const MapPage = (props) => {
  console.log("MapPage.js props: ", props.isMobileView);
  console.log(props);
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  if (props.isMobileView) {
    return (
      <div>
        <MobileModal handleClose={handleClose} />
      </div>
    );
  }

  return <CreateMap />;
};

// Need this here to get the current device that the user is on.
// Can't have getInitialProps in the component itself. It must be on the page component.
MapPage.getInitialProps = async (ctx) => {
  console.log("..... kin getInitialProps .....");
  let isMobileView = (
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  console.log("in getInitialProps", isMobileView);
  //Returning the isMobileView as a prop to the component for further use.
  return {
    isMobileView: Boolean(isMobileView),
  };
};

export default MapPage;
