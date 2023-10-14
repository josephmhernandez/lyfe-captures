import { BG_IMG_FOLDER_PATH, BG_IMG_MAP } from "../constants/BgImgConstants";

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

// Check phone number is a valid phone number.
export const isValidPhoneNumber = (phoneNumber) => {
  // Regex for 10 or 11 digits (if someone added a 1 in front)
  let regex1 = /^\d{10}$/;
  let regex2 = /^\d{11}$/;

  return regex1.test(phoneNumber) || regex2.test(phoneNumber);
};

export const getImgUrl = (imgCode, mapRatio = "2_3") => {
  // if we can find flagCode in BG_IMG_MAP, return the url
  // else return null
  // console.log("getting img url for", imgCode, mapRatio);
  // Should be replaced by lodash in the future.
  return BG_IMG_FOLDER_PATH + BG_IMG_MAP[imgCode][mapRatio].url;
};
