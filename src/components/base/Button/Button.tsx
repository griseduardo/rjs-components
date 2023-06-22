import * as React from "react"
import { ButtonProps } from "./Button.types";
import * as S from './Button.styles'

const Button: React.FC<ButtonProps> = ({
  text,
  textColor,
  backgroundColor,
  hoverColor,
  format,
  borderRadius,
  size,
  padding,
  disabled,
  onClick
}) => (
  <S.Button
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
  >{text}</S.Button>
)

export default Button;
