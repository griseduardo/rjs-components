import React from "react";
import styled from "styled-components";

export interface ParagraphProps {
  children: React.ReactNode;
  color?: string;
  weight?: "normal" | "bold";
  fontWeight?: number;
  fontSize?: string;
  fontFamily?: string;
}

export const StyledParagraph = styled.p<ParagraphProps>`
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
}: ParagraphProps) => (
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
