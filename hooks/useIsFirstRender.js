import React from "react";

export const useIsFirstRender = () => {
  const [isFirst, setIsFirst] = React.useState(false);

  React.useEffect(() => {
    setIsFirst(true);
  }, []);

  return isFirst;
};
