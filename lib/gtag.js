export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
export const pageview = (url) => {
  if (process.env.BUILD_ENV != "PROD") {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
export const event = ({ action, category, label, value }) => {
  if (process.env.BUILD_ENV != "PROD") {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

// export const event = ({ action, params }) => {
//   window.gtag("event", action, params);
// };
