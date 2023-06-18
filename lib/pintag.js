export const pinTagEvent = (eventName, eventProperties) => {
  if (process.env.BUILD_ENV != "PROD") {
    return;
  }
  window.pintrk("track", eventName, eventProperties);
};

export const pinTagPageView = () => {
  if (process.env.BUILD_ENV != "PROD") {
    return;
  }
  window.pintrk("track", "pagevisit");
};
