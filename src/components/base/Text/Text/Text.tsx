import React from "react";
import { TextProps } from "../Text.types";
import { StyledText } from "../Text.styled";

const Text = ({
  children,
  color,
  weight,
  fontWeight,
  fontSize,
  fontFamily,
}: TextProps) => (
  <StyledText
    color={color}
    weight={weight}
    fontWeight={fontWeight}
    fontSize={fontSize}
    fontFamily={fontFamily}
  >
    {children}
  </StyledText>
);

export default Text;
