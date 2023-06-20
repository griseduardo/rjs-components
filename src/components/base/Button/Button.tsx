import * as React from "react"
import { ButtonProps } from "./Button.types";
import * as S from './Button.styles'

const Button: React.FC<ButtonProps> = ({
  text,
  textColor,
  backgroundColor,
  rounded,
  disabled,
  onClick
}) => (
  <S.Button
    text={text}
    textColor={textColor}
    backgroundColor={backgroundColor}
    rounded={rounded}
    disabled={disabled}
    onClick={onClick}
  >{text}</S.Button>
)

export default Button;
