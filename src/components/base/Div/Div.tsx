import React from "react";
import styled from "styled-components";

export interface DivProps {
  children: React.ReactNode;
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
  alignContent?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const StyledDiv = styled.div<DivProps>`
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) =>
    (props.alignContent || props.justifyContent || props.alignItems) &&
    `display: flex`};
  ${(props) => props.alignContent && `align-content: ${props.alignContent}`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent}`};
`;

const Div = ({
  children,
  margin,
  padding,
  height,
  width,
  alignContent,
  alignItems,
  justifyContent,
}: DivProps) => (
  <StyledDiv
    margin={margin}
    padding={padding}
    height={height}
    width={width}
    alignContent={alignContent}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </StyledDiv>
);

export default Div;
