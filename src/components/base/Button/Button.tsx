import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import Text from "../Text/Text";
import {
  CommonButtonTagProps,
  StyledCommonButtonTagProps,
} from "../Common.types";

export interface ButtonProps extends CommonButtonTagProps {
  hoverColor?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface StyledButtonProps extends StyledCommonButtonTagProps {
  $hoverColor?: string;
  $disabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
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

const Button = ({
  text,
  textColor,
  textWeight,
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
}: ButtonProps) => (
  <StyledButton
    $backgroundColor={backgroundColor}
    $hoverColor={hoverColor}
    $format={format}
    $borderRadius={borderRadius}
    $size={size}
    $padding={padding}
    $disabled={disabled}
    onClick={onClick}
  >
    <Text
      color={textColor}
      weight={textWeight}
      fontWeight={textFontWeight}
      fontSize={textFontSize}
      fontFamily={textFontFamily}
    >
      {text}
    </Text>
  </StyledButton>
);

export default Button;
