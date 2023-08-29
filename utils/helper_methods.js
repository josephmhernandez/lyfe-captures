import { BG_IMG_CODE_URL_MAP } from "../components/createMap/MapFolder/MapConstants";

export const validateEmail = (email) => {
  if (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return true;
  }
  return false;
};

export const getImgUrl = (imgCode, mapRatio = "2_3") => {
  // if we can find flagCode in FLAG_URL_MAP, return the url
  // else return null
  return BG_IMG_CODE_URL_MAP[imgCode][mapRatio];
};
