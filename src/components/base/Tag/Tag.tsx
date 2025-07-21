import React from "react";
import styled from "styled-components";
import Div from "../Div/Div";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import { CommonTagProps, StyledCommonTagProps } from "../Common.types";

export interface TagProps extends CommonTagProps {
  border?: string;
  src?: string;
  iconBorderRadius?: string;
  iconPlacement?: "right" | "left";
  iconHeight?: string;
  iconWidth?: string;
  spacing?: string;
}

export interface StyledTagProps extends StyledCommonTagProps {
  $border?: string;
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
  src,
  spacing,
  iconPlacement = "left",
  iconBorderRadius,
  iconHeight,
  iconWidth,
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
      {src && iconPlacement === "left" && (
        <Icon
          padding={
            spacing
              ? `0 ${spacing} 0 0`
              : size === "large"
                ? "0 20px 0 0"
                : size === "medium"
                  ? "0 12px 0 0"
                  : "0 7px 0 0"
          }
          iconHeight={iconHeight}
          iconWidth={iconWidth}
          src={src}
          iconBorderRadius={iconBorderRadius}
        />
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
      {src && iconPlacement === "right" && (
        <Icon
          padding={
            spacing
              ? `0 0 0 ${spacing}`
              : size === "large"
                ? "0 0 0 20px"
                : size === "medium"
                  ? "0 0 0 12px"
                  : "0 0 0 7px"
          }
          iconHeight={iconHeight}
          iconWidth={iconWidth}
          src={src}
          iconBorderRadius={iconBorderRadius}
        />
      )}
    </StyledTag>
  );
};

export default Tag;
