export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
export const pageview = (url) => {
  // if (process.env.BUILD_ENV != "PROD") {
  //   return;
  // }
  console.log("old - pageview called");

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
export const event = ({ action, category, label, value }) => {
  // if (process.env.BUILD_ENV != "PROD") {
  //   return;
  // }
  console.log("old - event called");
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

// export const event = ({ action, params }) => {
//   window.gtag("event", action, params);
// };

// export const gtmVirtualPageView = (rest) => {
//   console.log("new - pushing virtual page view to data layer");
//   console.log("datalayer? " + window.dataLayer);

//   window.dataLayer?.push({
//     event: "VirtualPageView",
//     ...rest,
//   });
// };

// export const gtmCustomAddToCart = (productInfo) => {
//   console.log("new - pushign custom add to cart to data layer");
//   console.log("datalayer? " + window.dataLayer);

//   window.dataLayer?.push({
//     event: "AddToCart",
//     ecommerce: {
//       currencyCode: "USD",
//       add: {
//         products: [
//           {
//             name: productInfo.name ? productInfo.name : null,
//             id: productInfo.id ? productInfo.id : null,
//             variant: productInfo.variant ? productInfo.variant : null,
//           },
//         ],
//       },
//     },
//   });
// };
