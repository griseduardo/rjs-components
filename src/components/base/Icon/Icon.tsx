import React from "react";

import Img from "../Img";
import Div from "../Div";

export interface IconProps {
  padding?: string;
  iconHeight?: string;
  iconWidth?: string;
  src: string;
  format?: "default" | "semiRounded" | "rounded";
  iconBorderRadius?: string;
}

const Icon = ({
  padding,
  iconHeight,
  iconWidth,
  src,
  format,
  iconBorderRadius,
}: IconProps) => (
  <Div
    padding={padding}
    height={iconHeight ? iconHeight : iconWidth ? "auto" : "30px"}
    width={iconWidth || "auto"}
    justifyContent={"center"}
  >
    <Img
      src={src}
      height={"100%"}
      width={"100%"}
      format={format}
      borderRadius={iconBorderRadius}
    />
  </Div>
);

export default Icon;
