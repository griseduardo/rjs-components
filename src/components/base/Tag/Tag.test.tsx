import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";

import Tag from "./Tag";

describe("<Tag />", () => {
  it("should render component with default properties", () => {
    render(<Tag text="Tag" />);

    const element = screen.getByText("Tag");

    expect(element).toBeInTheDocument;
    expect(element).toHaveStyleRule("color", "#fff");
    expect(element).toHaveStyleRule("background-color", "#d3d3d3");
    expect(element).toHaveStyleRule("border-radius", "0px");
    expect(element).toHaveStyleRule("padding", "7px");
  });

  it("should render component with success type", () => {
    render(<Tag text="Tag" type="success" />);

    const element = screen.getByText("Tag");

    expect(element).toHaveStyleRule("background-color", "#00ff00");
    expect(element).toHaveStyleRule("color", "#fff");
  });

  it("should render component with alert type", () => {
    render(<Tag text="Tag" type="alert" />);

    const element = screen.getByText("Tag");

    expect(element).toHaveStyleRule("background-color", "#ffff00");
    expect(element).toHaveStyleRule("color", "#fff");
  });

  it("should render component with error type", () => {
    render(<Tag text="Tag" type="error" />);

    const element = screen.getByText("Tag");

    expect(element).toHaveStyleRule("background-color", "#ff0000");
    expect(element).toHaveStyleRule("color", "#fff");
  });

  it("should render component with custom text color", () => {
    render(<Tag text="Tag" textColor="#000" />);

    expect(screen.getByText("Tag")).toHaveStyleRule("color", "#000");
  });

  it("should render component with custom background color", () => {
    render(<Tag text="Tag" backgroundColor="#fff" />);

    expect(screen.getByText("Tag")).toHaveStyleRule("background-color", "#fff");
  });

  it("should render component with semi rounded format", () => {
    render(<Tag text="Tag" format="semiRounded" />);

    expect(screen.getByText("Tag")).toHaveStyleRule("border-radius", "5px");
  });

  it("should render component with rounded format", () => {
    render(<Tag text="Tag" format="rounded" />);

    expect(screen.getByText("Tag")).toHaveStyleRule("border-radius", "30px");
  });

  it("should render component with custom border radius", () => {
    render(<Tag text="Tag" borderRadius="20px" />);

    expect(screen.getByText("Tag")).toHaveStyleRule("border-radius", "20px");
  });

  it("should render component with medium size", () => {
    render(<Tag text="Tag" size="medium" />);

    expect(screen.getByText("Tag")).toHaveStyleRule("padding", "10px 12px");
  });

  it("should render component with large size", () => {
    render(<Tag text="Tag" size="large" />);

    expect(screen.getByText("Tag")).toHaveStyleRule("padding", "15px 20px");
  });

  it("should render component with custom size", () => {
    render(<Tag text="Tag" padding="20px 10px" />);

    expect(screen.getByText("Tag")).toHaveStyleRule("padding", "20px 10px");
  });
});
