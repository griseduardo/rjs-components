import React from "react";
import styled from "styled-components";
import Div from "../Div/Div";
import Text from "../Text/Text";
import {
  CommonButtonTagProps,
  StyledCommonButtonTagProps,
} from "../Common.types";

export interface TagProps extends CommonButtonTagProps {
  type?: "default" | "success" | "alert" | "error";
}

export interface StyledTagProps extends StyledCommonButtonTagProps {
  $type?: "default" | "success" | "alert" | "error";
}

export const StyledTag = styled.div<StyledTagProps>`
  border: none;
  align-items: center;
  display: flex;
  padding: ${(props) =>
    props.$padding
      ? props.$padding
      : props.$size === "large"
        ? "19px 16px"
        : props.$size === "medium"
          ? "13px"
          : props.$size === "small" && "9px"};
  background-color: ${(props) =>
    props.$backgroundColor
      ? props.$backgroundColor
      : props.$type === "error"
        ? "#e97451"
        : props.$type === "alert"
          ? "#f8de7e"
          : props.$type === "success"
            ? "#50c878"
            : props.$type === "default" && "#d3d3d3"};
  pointer-events: none;
  border-radius: ${(props) =>
    props.$borderRadius
      ? props.$borderRadius
      : props.$format === "rounded"
        ? "30px"
        : props.$format === "semiRounded"
          ? "5px"
          : props.$format === "square" && "0"};
  width: fit-content;
  ${(props) => props.$border && `border: ${props.$border};`}
`;

const Tag = ({
  text = "Tag",
  type = "default",
  textColor = "#fff",
  textFontWeight = 600,
  textFontSize,
  textFontFamily,
  backgroundColor,
  format = "semiRounded",
  borderRadius,
  size = "medium",
  padding,
  border,
  spacing,
  icon,
  iconPlacement = "left",
}: TagProps) => {
  const fontSize = textFontSize
    ? textFontSize
    : size === "large"
      ? "18px"
      : size === "small"
        ? "14px"
        : "16px";

  return (
    <StyledTag
      data-testid="tag"
      $type={type}
      $backgroundColor={backgroundColor}
      $format={format}
      $borderRadius={borderRadius}
      $size={size}
      $padding={padding}
      $border={border}
    >
      {icon && iconPlacement === "left" && (
        <Div
          padding={
            spacing
              ? `0 ${spacing} 0 0`
              : size === "large"
                ? "0 20px 0 0"
                : size === "medium"
                  ? "0 12px 0 0"
                  : "0 7px 0 0"
          }
          alignItems="center"
        >
          {icon}
        </Div>
      )}
      <Div>
        <Text
          color={textColor}
          fontWeight={textFontWeight}
          fontSize={fontSize}
          fontFamily={textFontFamily}
        >
          {text}
        </Text>
      </Div>
      {icon && iconPlacement === "right" && (
        <Div
          padding={
            spacing
              ? `0 0 0 ${spacing}`
              : size === "large"
                ? "0 0 0 20px"
                : size === "medium"
                  ? "0 0 0 12px"
                  : "0 0 0 7px"
          }
          alignItems="center"
        >
          {icon}
        </Div>
      )}
    </StyledTag>
  );
};

export default Tag;
