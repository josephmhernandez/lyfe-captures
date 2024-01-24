import { useMediaQuery } from "../../../hooks/useMediaQuery";
import dynamic from "next/dynamic";

const TableAnalysis = () => {
  // Media query for mobile
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    // return <MobileTableAnalysis />;
  }

  const MobileTableAnalysis = dynamic(() => import("./MobileTableAnalysis"), {
    ssr: false,
  });

  const WebTableAnalysis = dynamic(() => import("./WebTableAnalysis"), {
    ssr: false,
  });

  return (
    <div>
      {isMobile && <MobileTableAnalysis />}
      {!isMobile && <WebTableAnalysis />}
      <p className="text-gray-500 dark:text-gray-400 pt-[1vh] sm:text-lg md:text-xl">
        * We have designers on stand by to help customize your map 100% free of
        charge
      </p>
    </div>
  );
};
export default TableAnalysis;
