import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import Icon from "../Icon";
import Div from "../Div";
import { CommonTagProps, StyledCommonTagProps } from "../Common.types";

export interface IconTagProps extends CommonTagProps {
  src: string;
  iconFormat?: "default" | "semiRounded" | "rounded";
  iconBorderRadius?: string;
  iconPlacement?: "right" | "left";
  iconHeight?: string;
  iconWidth?: string;
  spacing?: string;
}

export const StyledTag = styled.div<StyledCommonTagProps>`
  border: none;
  display: flex;
  align-items: center;
  padding: ${(props) =>
    props.$padding
      ? props.$padding
      : props.$size === "large"
        ? "15px 20px"
        : props.$size === "medium"
          ? "10px 12px"
          : "7px"};
  background-color: ${(props) =>
    props.$backgroundColor
      ? props.$backgroundColor
      : props.$type === "error"
        ? "#e97451"
        : props.$type === "alert"
          ? "#f8de7e"
          : props.$type === "success"
            ? "#50c878"
            : "#d3d3d3"};
  pointer-events: none;
  border-radius: ${(props) =>
    props.$borderRadius
      ? props.$borderRadius
      : props.$format === "rounded"
        ? "30px"
        : props.$format === "semiRounded"
          ? "5px"
          : "0"};
  width: fit-content;
`;

const IconTag = ({
  text,
  type,
  textColor,
  textFontWeight,
  textFontSize,
  textFontFamily,
  backgroundColor,
  format,
  borderRadius,
  size,
  padding,
  src,
  spacing,
  iconPlacement,
  iconFormat,
  iconBorderRadius,
  iconHeight,
  iconWidth,
}: IconTagProps) => (
  <StyledTag
    data-testid="tag"
    $type={type}
    $backgroundColor={backgroundColor}
    $format={format}
    $borderRadius={borderRadius}
    $size={size}
    $padding={padding}
  >
    {iconPlacement !== "right" && (
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
        format={iconFormat}
        iconBorderRadius={iconBorderRadius}
      />
    )}
    <Div>
      <Text
        color={textColor || "#fff"}
        fontWeight={textFontWeight}
        fontSize={textFontSize}
        fontFamily={textFontFamily}
      >
        {text}
      </Text>
    </Div>
    {iconPlacement === "right" && (
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
        format={iconFormat}
        iconBorderRadius={iconBorderRadius}
      />
    )}
  </StyledTag>
);

export default IconTag;
