import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";

import Div from "./Div";

describe("<Div />", () => {
  it("should render component with default properties", () => {
    render(<Div>Div</Div>);

    expect(screen.getByText("Div")).toBeInTheDocument();
  });

  it("should render component with custom margin", () => {
    render(<Div margin="20px">Div</Div>);

    expect(screen.getByText("Div")).toHaveStyleRule("margin", "20px");
  });

  it("should render component with custom padding", () => {
    render(<Div padding="20px">Div</Div>);

    expect(screen.getByText("Div")).toHaveStyleRule("padding", "20px");
  });

  it("should render component with custom height", () => {
    render(<Div height="20px">Div</Div>);

    expect(screen.getByText("Div")).toHaveStyleRule("height", "20px");
  });

  it("should render component with custom width", () => {
    render(<Div width="20px">Div</Div>);

    expect(screen.getByText("Div")).toHaveStyleRule("width", "20px");
  });

  it("should render component with custom align content", () => {
    render(<Div alignContent="center">Div</Div>);

    const element = screen.getByText("Div");

    expect(element).toHaveStyleRule("display", "flex");
    expect(element).toHaveStyleRule("align-content", "center");
  });

  it("should render component with custom align items", () => {
    render(<Div alignItems="center">Div</Div>);

    const element = screen.getByText("Div");

    expect(element).toHaveStyleRule("display", "flex");
    expect(element).toHaveStyleRule("align-items", "center");
  });

  it("should render component with custom justify content", () => {
    render(<Div justifyContent="center">Div</Div>);

    const element = screen.getByText("Div");

    expect(element).toHaveStyleRule("display", "flex");
    expect(element).toHaveStyleRule("justify-content", "center");
  });
});
