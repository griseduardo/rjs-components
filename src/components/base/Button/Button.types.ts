import { MouseEventHandler } from "react";

export interface ButtonProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  format?: "default" | "semiRounded" | "rounded";
  borderRadius?: string;
  size?: "small" | "medium" | "large";
  padding?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
