import React from "react";
import styled from "styled-components";

export interface TagProps {
  text: string;
  type?: "default" | "success" | "alert" | "error";
  textColor?: string;
  backgroundColor?: string;
  format?: "default" | "semiRounded" | "rounded";
  borderRadius?: string;
  size?: "small" | "medium" | "large";
  padding?: string;
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
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
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
  backgroundColor,
  format,
  borderRadius,
  size,
  padding,
}: TagProps) => (
  <StyledTag
    text={text}
    type={type}
    textColor={textColor}
    backgroundColor={backgroundColor}
    format={format}
    borderRadius={borderRadius}
    size={size}
    padding={padding}
  >
    {text}
  </StyledTag>
);

export default Tag;
