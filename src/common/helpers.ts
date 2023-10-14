import { IMAGE_BASE_URL } from "../../env"
import { BackdropSize } from "./types";

// As mentioned in the API docs we only get paths and then manually have to construct the actual url for the images.
// From 'configuration' API we get all the available sizes for the images and we can use them to construct URLs
export const getImageUrl = (path: string, size: BackdropSize = "original") => {
  return `${IMAGE_BASE_URL}/${size}/${path}`;
}

export const getTrailerKey = (videos: any[]) => {
  const youTubeTrailer = videos?.find((videoObj) => videoObj.type === "Trailer" && videoObj.site === "YouTube");
  return youTubeTrailer?.key;
}
