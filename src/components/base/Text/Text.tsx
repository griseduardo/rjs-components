import React from "react";
import styled from "styled-components";
import { CommonTextProps, StyledCommonTextProps } from "../Common.types";

export const StyledText = styled.span<StyledCommonTextProps>`
  ${(props) => props.$color && `color: ${props.$color};`}
  ${(props) => props.$fontSize && `font-size: ${props.$fontSize};`}
  font-weight: ${(props) =>
    props.$fontWeight
      ? props.$fontWeight
      : props.$weight
        ? props.$weight
        : "normal"};
  ${(props) => props.$fontFamily && `font-family: ${props.$fontFamily};`}
`;

const Text = ({
  children,
  color = "#000",
  weight = "normal",
  fontWeight,
  fontSize = "16px",
  fontFamily,
}: CommonTextProps) => (
  <StyledText
    $color={color}
    $weight={weight}
    $fontWeight={fontWeight}
    $fontSize={fontSize}
    $fontFamily={fontFamily}
  >
    {children}
  </StyledText>
);

export default Text;
