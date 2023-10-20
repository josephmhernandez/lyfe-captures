// Analytics Constants
export const PINTEREST_URL = "https://www.pinterest.com/mapyourmemoryofficial/";
export const PINTEREST_PAGE_NAME = "@mapyourmemoryofficial";

// Local Storage Constants
export const SPECIAL_REQUEST_MAP_STORAGE_KEY = "special_request_map";

// UI Constants
export const MEDIA_QUERY_MOBILE = "(max-width: 800px)";

// UI Accordion Constnats
export const BACKGROUND_RECENT_BGS_SIZE = 3; // Number of recent backgrounds to display in list

// UI Style Constatns
export const getButtonStyle = (isMobile) => {
  return {
    ...BTN_STYLE,

    ...(isMobile && {
      fontFamily: "var(--mobile-page-paragraph-font-family)",
      fontSize: "var(--mobile-page-paragraph-font-size)",
    }),
  };
};

export const getActionButtonStyle = (
  isMobile,
  color = "var(--color-primary)"
) => {
  return {
    ...ACCORDION_BTN_STYLE,

    backgroundColor: color,

    width: "70%",
    textAlign: "center",
    margin: "0 auto",
    ...(isMobile && {
      width: "100px",
      fontFamily: "var(--mobile-page-paragraph-font-family)",
      fontSize: "var(--mobile-page-paragraph-font-size)",
    }),
  };
};

export const getAccordionButtonStyle = (isMobile) => {
  return {
    ...ACCORDION_BTN_STYLE,

    ...(isMobile && {
      fontFamily: "var(--mobile-page-paragraph-font-family)",
      fontSize: "var(--mobile-page-paragraph-font-size)",
    }),
  };
};

export const getAccordionActionButtonStyle = (isMobile) => {
  return {
    ...ACCORDION_BTN_STYLE,

    backgroundColor: "var(--buy-now-btn-color)",

    ...(isMobile && {
      fontFamily: "var(--mobile-page-paragraph-font-family)",
      fontSize: "var(--mobile-page-paragraph-font-size)",
    }),
  };
};

export const BTN_STYLE = {
  "background-color": "var(--color-primary)",
  color: "white",
  "border-radius": "100px",
  "font-family": "var(--page-paragraph-font-family)",
  "font-size": "var(--page-paragraph-font-size)",
  "font-weight": "400",
};

export const ACCORDION_BTN_STYLE = {
  "background-color": "var(--color-primary)",
  color: "white",
  "border-radius": "100px",
  "font-family": "var(--page-paragraph-font-family)",
  "font-size": "var(--accordion-small-font-size)",
  "font-weight": "400",
  padding: "0.5rem 1rem",
  margin: "0.75rem 0",
};

export const IMG_URL_BLUR_DISPLAY_MAP_BG_IMG = "/images/blur/Hawaii-blur.png";
