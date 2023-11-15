export interface ImageDto {
  img: string;
  title: string;
}

export interface imagePopUpContext {
  id: number;
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}