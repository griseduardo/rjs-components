import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import Div from "../Div/Div";
import Text from "../Text/Text";
import {
  CommonButtonTagProps,
  StyledCommonButtonTagProps,
} from "../Common.types";

export interface ButtonProps extends CommonButtonTagProps {
  type?: "primary" | "secondary";
  hoverColor?: string;
  focusColor?: string;
  activeColor?: string;
  disabled?: boolean;
  disabledOpacity?: number;
  hoverBorder?: string;
  focusBorder?: string;
  activeBorder?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface StyledButtonProps extends StyledCommonButtonTagProps {
  $type?: "primary" | "secondary";
  $hoverColor?: string;
  $focusColor?: string;
  $activeColor?: string;
  $disabledOpacity?: number;
  $hoverBorder?: string;
  $focusBorder?: string;
  $activeBorder?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: ${(props) =>
    props.$border
      ? props.$border
      : props.$type === "primary"
        ? "none"
        : props.$type === "secondary" && "1px solid #10b981"};
  cursor: pointer;
  align-items: center;
  display: flex;
  padding: ${(props) =>
    props.$padding
      ? props.$padding
      : props.$size === "large"
        ? props.$type === "primary"
          ? "19px 16px"
          : "18px 15px"
        : props.$size === "medium"
          ? props.$type === "primary"
            ? "13px"
            : "12px"
          : props.$size === "small" && props.$type === "primary"
            ? "9px"
            : "8px"};
  background-color: ${(props) =>
    props.$backgroundColor
      ? props.$backgroundColor
      : props.$type === "primary"
        ? "#10b981"
        : props.$type === "secondary" && "#fff"};
  border-radius: ${(props) =>
    props.$borderRadius
      ? props.$borderRadius
      : props.$format === "rounded"
        ? "30px"
        : props.$format === "semiRounded"
          ? "5px"
          : props.$format === "square" && "0"};
  &:hover {
    background-color: ${(props) =>
      props.$hoverColor
        ? props.$hoverColor
        : props.$type === "primary"
          ? "#0e9774"
          : props.$type === "secondary" && "#ecfdf5"};
    border: ${(props) =>
      props.$hoverBorder
        ? props.$hoverBorder
        : props.$type === "secondary" && "1px solid #0e9774"};
  }

  &:disabled {
    opacity: ${(props) => props.$disabledOpacity};
    pointer-events: none;
  }

  &:focus {
    background-color: ${(props) =>
      props.$focusColor
        ? props.$focusColor
        : props.$type === "primary"
          ? "#007a52"
          : props.$type === "secondary" && "#ecfdf5"};
    border: ${(props) =>
      props.$focusBorder
        ? props.$focusBorder
        : props.$type === "secondary" && "1px solid #007a52"};
  }

  &:active {
    background-color: ${(props) =>
      props.$activeColor
        ? props.$activeColor
        : props.$type === "primary"
          ? "#0c7a5e"
          : props.$type === "secondary" && "#dcfce7"};
    border: ${(props) =>
      props.$activeBorder
        ? props.$activeBorder
        : props.$type === "secondary" && "1px solid #0c7a5e"};
  }
`;

const Button = ({
  text = "Button",
  type = "primary",
  textColor,
  textFontWeight = 600,
  textFontSize,
  textFontFamily,
  backgroundColor,
  hoverColor,
  focusColor,
  activeColor,
  format = "semiRounded",
  borderRadius,
  size = "medium",
  padding,
  disabled = false,
  disabledOpacity = 0.5,
  border,
  hoverBorder,
  focusBorder,
  activeBorder,
  onClick,
  spacing,
  icon,
  iconPlacement = "left",
}: ButtonProps) => {
  const fontSize = textFontSize
    ? textFontSize
    : size === "large"
      ? "18px"
      : size === "small"
        ? "14px"
        : "16px";
  const definedTextColor = textColor
    ? textColor
    : type === "primary"
      ? "#fff"
      : "#10b981";

  return (
    <StyledButton
      $type={type}
      $backgroundColor={backgroundColor}
      $hoverColor={hoverColor}
      $focusColor={focusColor}
      $activeColor={activeColor}
      $format={format}
      $borderRadius={borderRadius}
      $size={size}
      $padding={padding}
      $disabledOpacity={disabledOpacity}
      $border={border}
      $hoverBorder={hoverBorder}
      $focusBorder={focusBorder}
      $activeBorder={activeBorder}
      disabled={disabled}
      onClick={onClick}
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
          color={definedTextColor}
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
    </StyledButton>
  );
};

export default Button;
