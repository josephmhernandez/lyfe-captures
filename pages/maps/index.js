import CreateMap from "../../components/createMap/CreateMap";
import MobileModal from "../../components/ui/MobileModal";
import { useRouter } from "next/router";
const mapCenter = { lat: 38.9072, lng: -77.0369 };
const mapDimension = { width: 700, height: 700 };

const MapPage = (props) => {
  const router = useRouter();

  const handleClose = () => {
    // handling close of modal when user is on mobile.
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
  let isMobileView = (
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  //Returning the isMobileView as a prop to the component for further use.
  return {
    isMobileView: Boolean(isMobileView),
  };
};

export default MapPage;
