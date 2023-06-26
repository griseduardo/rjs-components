import styled from "styled-components";
import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
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
