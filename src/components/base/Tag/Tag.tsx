import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import { CommonTagProps } from "../Common.types";

export interface TagProps extends CommonTagProps {
  type?: "default" | "success" | "alert" | "error";
}

export const StyledTag = styled.div<TagProps>`
  border: none;
  padding: ${(props) =>
    props.padding
      ? props.padding
      : props.size === "large"
      ? "15px 20px"
      : props.size === "medium"
      ? "10px 12px"
      : "7px"};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.type === "error"
      ? "#e97451"
      : props.type === "alert"
      ? "#f8de7e"
      : props.type === "success"
      ? "#50c878"
      : "#d3d3d3"};
  pointer-events: none;
  border-radius: ${(props) =>
    props.borderRadius
      ? props.borderRadius
      : props.format === "rounded"
      ? "30px"
      : props.format === "semiRounded"
      ? "5px"
      : "0px"};
  width: fit-content;
`;

const Tag = ({
  text,
  type,
  textColor,
  textWeight,
  textFontWeight,
  textFontSize,
  textFontFamily,
  backgroundColor,
  format,
  borderRadius,
  size,
  padding,
}: TagProps) => (
  <StyledTag
    data-testid="tag"
    text={text}
    type={type}
    backgroundColor={backgroundColor}
    format={format}
    borderRadius={borderRadius}
    size={size}
    padding={padding}
  >
    <Text
      color={textColor || "#fff"}
      weight={textWeight}
      fontWeight={textFontWeight}
      fontSize={textFontSize}
      fontFamily={textFontFamily}
    >
      {text}
    </Text>
  </StyledTag>
);

export default Tag;
