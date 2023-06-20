import styled from 'styled-components'
import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  color: ${(props) => props.textColor || "#000"};
  backgroundColor: ${(props) => props.backgroundColor || "#FFF"}
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  ${props => props.rounded && `border-radius: 50px`}
`
