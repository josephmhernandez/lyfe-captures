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

export const BTN_STYLE = {
  "background-color": "var(--color-primary)",
  color: "white",
  "border-radius": "100px",
  "font-family": "var(--page-paragraph-font-family)",
  "font-size": "var(--page-paragraph-font-size)",
  "font-weight": "400",
};
