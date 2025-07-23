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

  it("should render component with icon", () => {
    const icon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
        />
      </svg>
    );

    render(<Tag icon={icon} text="Tag" />);

    const tagElement = screen.getByTestId("tag");
    const imageElement = tagElement.childNodes[0];

    expect(imageElement).toHaveStyleRule("padding", "0 12px 0 0");
  });
});
