import React from "react";
import styled from "styled-components";

export interface ImgProps {
  src: string;
  alt?: string;
  height?: string;
  width?: string;
  format?: string;
  borderRadius?: string;
}

export interface StyledImgProps {
  $height?: string;
  $width?: string;
  $format?: string;
  $borderRadius?: string;
}

export const StyledImg = styled.img<StyledImgProps>`
  height: ${(props) => props.$height || "auto"};
  width: ${(props) => props.$width || "auto"};
  border-radius: ${(props) =>
    props.$borderRadius
      ? props.$borderRadius
      : props.$format === "rounded"
        ? "30px"
        : props.$format === "semiRounded"
          ? "5px"
          : "0px"};
`;

const Img = ({ src, alt, height, width, format, borderRadius }: ImgProps) => (
  <StyledImg
    src={src}
    alt={alt}
    $height={height}
    $width={width}
    $format={format}
    $borderRadius={borderRadius}
  />
);

export default Img;
