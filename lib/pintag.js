export const pinTagEvent = (eventName, eventProperties) => {
  if (process.env.BUILD_ENV != "PROD") {
    console.log("non prod env, not sending pintag event");
    return;
  }
  window.pintrk("track", eventName, eventProperties);
};

export const pinTagPageView = () => {
  if (process.env.BUILD_ENV != "PROD") {
    console.log("non prod env, not sending pintag pageview");
    return;
  }
  window.pintrk("track", "pagevisit");
};
