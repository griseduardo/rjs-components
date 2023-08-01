import React from "react";
import styled from "styled-components";

export interface DivProps {
  children: React.ReactNode;
  margin?: string;
  padding?: string;
  width?: string;
  alignContent?: string;
  justifyContent?: string;
}

export const StyledDiv = styled.div<DivProps>`
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => (props.alignContent || props.justifyContent) && `display: flex`};
  ${(props) => props.alignContent && `align-content: ${props.alignContent}`};
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`};
`;

const Div = ({
  children,
  margin,
  padding,
  width,
  alignContent,
  justifyContent,
}: DivProps) => (
  <StyledDiv
    margin={margin}
    padding={padding}
    width={width}
    alignContent={alignContent}
    justifyContent={justifyContent}
  >
    {children}
  </StyledDiv>
);

export default Div;
