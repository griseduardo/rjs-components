import React from "react";
import styled from "styled-components";
import { CommonTextProps } from "../Common.types";

export const StyledParagraph = styled.p<CommonTextProps>`
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) =>
    props.fontWeight
      ? props.fontWeight
      : props.weight
      ? props.weight
      : "normal"};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "Arial")};
`;

const Paragraph = ({
  children,
  color,
  weight,
  fontWeight,
  fontSize,
  fontFamily,
}: CommonTextProps) => (
  <StyledParagraph
    color={color}
    weight={weight}
    fontWeight={fontWeight}
    fontSize={fontSize}
    fontFamily={fontFamily}
  >
    {children}
  </StyledParagraph>
);

export default Paragraph;
