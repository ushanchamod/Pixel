import { createContext } from "react";
import { imagePopUpContext } from "../../dto/image.dto";

export const ImagePopupContext = createContext({
  imagePopup: {} as imagePopUpContext,
  setImagePopup: (imagePopup: imagePopUpContext) => {}
})