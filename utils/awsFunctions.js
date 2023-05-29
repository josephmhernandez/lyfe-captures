import { Storage } from "aws-amplify";

export const getPublicImage = async (filename) => {
  const file = await Storage.get(filename, {
    level: "public",
  });
  return file;
};
