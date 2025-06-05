import React from "react";
import styled from "styled-components";
import { CommonTextProps, StyledCommonTextProps } from "../Common.types";

export const StyledParagraph = styled.p<StyledCommonTextProps>`
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

const Paragraph = ({
  children,
  color = "#000",
  weight = "normal",
  fontWeight,
  fontSize = "16px",
  fontFamily,
}: CommonTextProps) => (
  <StyledParagraph
    $color={color}
    $weight={weight}
    $fontWeight={fontWeight}
    $fontSize={fontSize}
    $fontFamily={fontFamily}
  >
    {children}
  </StyledParagraph>
);

export default Paragraph;
