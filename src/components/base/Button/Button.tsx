import * as React from "react";
import { MouseEventHandler } from "react";
import styled from "styled-components";

export interface ButtonProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  format?: "default" | "semiRounded" | "rounded";
  borderRadius?: string;
  size?: "small" | "medium" | "large";
  padding?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  padding: ${(props) =>
    props.padding
      ? props.padding
      : props.size === "large"
      ? "15px 20px"
      : props.size === "medium"
      ? "10px 12px"
      : "7px"};
  color: ${(props) => props.textColor || `#000`};
  background-color: ${(props) => props.backgroundColor || `#d3d3d3`};
  pointer-events: ${(props) => (props.disabled ? `none` : `auto`)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-radius: ${(props) =>
    props.borderRadius
      ? props.borderRadius
      : props.format === "rounded"
      ? "30px"
      : props.format === "semiRounded"
      ? "5px"
      : "0px"};
  &:hover {
    background-color: ${(props) => props.hoverColor || "#a9a9a9"};
  }
`;

const Button = ({
  text,
  textColor,
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
    text={text}
    textColor={textColor}
    backgroundColor={backgroundColor}
    hoverColor={hoverColor}
    format={format}
    borderRadius={borderRadius}
    size={size}
    padding={padding}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </StyledButton>
);

export default Button;
