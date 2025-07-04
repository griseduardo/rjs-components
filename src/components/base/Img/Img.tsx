import React from "react";
import styled from "styled-components";

export interface ImgProps {
  src: string;
  alt?: string;
  height?: string;
  width?: string;
  format?: string;
  borderRadius?: string;
  objectFit?: string;
}

export interface StyledImgProps {
  $height?: string;
  $width?: string;
  $format?: string;
  $borderRadius?: string;
  $objectFit?: string;
}

export const StyledImg = styled.img<StyledImgProps>`
  ${(props) => props.$height && `height: ${props.$height};`}
  ${(props) => props.$width && `width: ${props.$width};`}
  ${(props) => props.$objectFit && `object-fit: ${props.$objectFit};`}
  border-radius: ${(props) =>
    props.$borderRadius
      ? props.$borderRadius
      : props.$format === "rounded"
        ? "30px"
        : props.$format === "semiRounded"
          ? "5px"
          : props.$format === "square"
            ? "0"
            : undefined};
`;

const Img = ({
  src,
  alt,
  height,
  width,
  format,
  borderRadius,
  objectFit,
}: ImgProps) => (
  <StyledImg
    src={src}
    alt={alt}
    $height={height}
    $width={width}
    $format={format}
    $borderRadius={borderRadius}
    $objectFit={objectFit}
  />
);

export default Img;
