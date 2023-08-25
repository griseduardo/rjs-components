import styled from "styled-components";
import { TextProps } from "./Text.types";

export const StyledText = styled.span<TextProps>`
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) =>
    props.fontWeight
      ? props.fontWeight
      : props.weight
      ? props.weight
      : "normal"};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "Arial")};
`;
