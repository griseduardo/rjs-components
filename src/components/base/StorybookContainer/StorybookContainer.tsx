import React from "react";
import Div from "../Div";

export interface StorybookContainerProps {
  children: React.ReactNode;
}

const StorybookContainer = ({ children }: StorybookContainerProps) => (
  <Div alignItems="center" justifyContent="center" gap="10px">
    {children}
  </Div>
);

export default StorybookContainer;
