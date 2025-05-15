import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import Icon from "../Icon";
import Text from "../Text/Text";
import Div from "../Div";
import {
  CommonButtonTagProps,
  StyledCommonButtonTagProps,
} from "../Common.types";

export interface IconButtonProps extends CommonButtonTagProps {
  hoverColor?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  src: string;
  iconFormat?: "default" | "semiRounded" | "rounded";
  iconBorderRadius?: string;
  iconPlacement?: "right" | "left";
  iconHeight?: string;
  iconWidth?: string;
  spacing?: string;
}

export interface StyledIconButtonProps extends StyledCommonButtonTagProps {
  $hoverColor?: string;
  $disabled?: boolean;
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${(props) =>
    props.$padding
      ? props.$padding
      : props.$size === "large"
        ? "15px 20px"
        : props.$size === "medium"
          ? "10px 12px"
          : "7px"};
  background-color: ${(props) => props.$backgroundColor || `#d3d3d3`};
  pointer-events: ${(props) => (props.$disabled ? `none` : `auto`)};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  border-radius: ${(props) =>
    props.$borderRadius
      ? props.$borderRadius
      : props.$format === "rounded"
        ? "30px"
        : props.$format === "semiRounded"
          ? "5px"
          : "0"};
  &:hover {
    background-color: ${(props) => props.$hoverColor || "#a9a9a9"};
  }
`;

const IconButton = ({
  text,
  textColor,
  textFontWeight,
  textFontSize,
  textFontFamily,
  backgroundColor,
  hoverColor,
  format,
  borderRadius,
  size,
  padding,
  disabled,
  onClick,
  src,
  spacing,
  iconPlacement,
  iconFormat,
  iconBorderRadius,
  iconHeight,
  iconWidth,
}: IconButtonProps) => (
  <StyledIconButton
    $backgroundColor={backgroundColor}
    $hoverColor={hoverColor}
    $format={format}
    $borderRadius={borderRadius}
    $size={size}
    $padding={padding}
    $disabled={disabled}
    onClick={onClick}
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
        color={textColor}
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
  </StyledIconButton>
);

export default IconButton;
