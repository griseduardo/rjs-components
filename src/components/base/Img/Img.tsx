import React from "react";
import styled from "styled-components";

export interface ImgProps {
  src: string;
  alt?: string;
  height?: string;
  width?: string;
}

export const StyledImg = styled.img<ImgProps>`
  height: ${(props) => props.height || "auto"};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const Img = ({ src, alt, height, width }: ImgProps) => (
  <StyledImg src={src} alt={alt} height={height} width={width} />
);

export default Img;
