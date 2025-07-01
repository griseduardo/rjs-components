import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen, within } from "@testing-library/react";

import Tag from "./Tag";

describe("<Tag />", () => {
  it("should render component with default properties", () => {
    render(<Tag text="Tag" />);

    const element = screen.getByTestId("tag");

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyleRule("background-color", "#d3d3d3");
    expect(element).toHaveStyleRule("border-radius", "5px");
    expect(element).toHaveStyleRule("padding", "13px");
    expect(element).toHaveStyleRule("border", "none");
    expect(within(element).getByText("Tag")).toHaveStyleRule("color", "#fff");
  });

  it("should render component with success type", () => {
    render(<Tag text="Tag" type="success" />);

    const element = screen.getByTestId("tag");

    expect(element).toHaveStyleRule("background-color", "#50c878");
    expect(within(element).getByText("Tag")).toHaveStyleRule("color", "#fff");
  });

  it("should render component with alert type", () => {
    render(<Tag text="Tag" type="alert" />);

    const element = screen.getByTestId("tag");

    expect(element).toHaveStyleRule("background-color", "#f8de7e");
    expect(within(element).getByText("Tag")).toHaveStyleRule("color", "#fff");
  });

  it("should render component with error type", () => {
    render(<Tag text="Tag" type="error" />);

    const element = screen.getByTestId("tag");

    expect(element).toHaveStyleRule("background-color", "#e97451");
    expect(within(element).getByText("Tag")).toHaveStyleRule("color", "#fff");
  });

  it("should render component with custom background color", () => {
    render(<Tag text="Tag" backgroundColor="#fff" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule(
      "background-color",
      "#fff",
    );
  });

  it("should render component with square format", () => {
    render(<Tag text="Tag" format="square" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("border-radius", "0");
  });

  it("should render component with rounded format", () => {
    render(<Tag text="Tag" format="rounded" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("border-radius", "30px");
  });

  it("should render component with custom border radius", () => {
    render(<Tag text="Tag" borderRadius="20px" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("border-radius", "20px");
  });

  it("should render component with small size", () => {
    render(<Tag text="Tag" size="small" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("padding", "9px");
  });

  it("should render component with large size", () => {
    render(<Tag text="Tag" size="large" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("padding", "19px 16px");
  });

  it("should render component with custom size", () => {
    render(<Tag text="Tag" padding="20px 10px" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("padding", "20px 10px");
  });

  it("should render component with custom border", () => {
    render(<Tag text="Tag" border="2px solid #fff" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule(
      "border",
      "2px solid #fff",
    );
  });

  it("should render component with custom text color", () => {
    render(<Tag text="Tag" textColor="#000" />);

    const element = screen.getByTestId("tag");

    expect(within(element).getByText("Tag")).toHaveStyleRule("color", "#000");
  });

  it("should render component with custom text font weight", () => {
    render(<Tag text="Tag" textFontWeight={200} />);

    const element = screen.getByTestId("tag");

    expect(within(element).getByText("Tag")).toHaveStyleRule(
      "font-weight",
      "200",
    );
  });

  it("should render component with custom text font size", () => {
    render(<Tag text="Tag" textFontSize="30px" />);

    const element = screen.getByTestId("tag");

    expect(within(element).getByText("Tag")).toHaveStyleRule(
      "font-size",
      "30px",
    );
  });

  it("should render component with custom text font family", () => {
    render(<Tag text="Tag" textFontFamily="Times New Roman" />);

    const element = screen.getByTestId("tag");

    expect(within(element).getByText("Tag")).toHaveStyleRule(
      "font-family",
      "Times New Roman",
    );
  });

  it("should render component with custom text color", () => {
    render(<Tag text="Tag" textColor="#000" />);

    const element = screen.getByTestId("tag");

    expect(within(element).getByText("Tag")).toHaveStyleRule("color", "#000");
  });
});
