import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";

import Paragraph from "./Paragraph";

describe("<Paragraph />", () => {
  it("should render component with default properties", () => {
    render(<Paragraph>Paragraph</Paragraph>);

    const element = screen.getByText("Paragraph");

    expect(element).toBeInTheDocument;
    expect(element).toHaveStyleRule("color", "#000");
    expect(element).toHaveStyleRule("font-size", "16px");
    expect(element).toHaveStyleRule("font-weight", "normal");
  });

  it("should render component with custom color", () => {
    render(<Paragraph color="#fff">Paragraph</Paragraph>);

    expect(screen.getByText("Paragraph")).toHaveStyleRule("color", "#fff");
  });

  it("should render component with bold weight", () => {
    render(<Paragraph weight="bold">Paragraph</Paragraph>);

    expect(screen.getByText("Paragraph")).toHaveStyleRule(
      "font-weight",
      "bold"
    );
  });

  it("should render component with custom weight", () => {
    render(<Paragraph fontWeight={500}>Paragraph</Paragraph>);

    expect(screen.getByText("Paragraph")).toHaveStyleRule("font-weight", "500");
  });

  it("should render component with custom font size", () => {
    render(<Paragraph fontSize="20px">Paragraph</Paragraph>);

    expect(screen.getByText("Paragraph")).toHaveStyleRule("font-size", "20px");
  });

  it("should render component with custom font family", () => {
    render(<Paragraph fontFamily="TimesNewRoman">Paragraph</Paragraph>);

    expect(screen.getByText("Paragraph")).toHaveStyleRule(
      "font-family",
      "TimesNewRoman"
    );
  });
});
