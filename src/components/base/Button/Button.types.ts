import { MouseEventHandler } from "react";

export interface ButtonProps {
  text: string;
  textColor?: string,
  backgroundColor?: string,
  rounded?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
