import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen, within } from "@testing-library/react";

import IconTag from "./IconTag";

describe("<IconTag />", () => {
  it("should render component with default properties", () => {
    render(<IconTag src="image" text="IconTag" />);

    const iconTagElement = screen.getByTestId("tag");
    const imageElement = iconTagElement.childNodes[0];

    expect(iconTagElement).toBeInTheDocument();
    expect(iconTagElement).toHaveStyleRule("background-color", "#d3d3d3");
    expect(iconTagElement).toHaveStyleRule("padding", "7px");
    expect(within(iconTagElement).getByText("IconTag")).toHaveStyleRule(
      "color",
      "#fff",
    );
    expect(imageElement).toHaveStyleRule("padding", "0 7px 0 0");
    expect(imageElement).toHaveStyleRule("height", "30px");
    expect(imageElement).toHaveStyleRule("width", "auto");
  });

  it("should render component with success type", () => {
    render(<IconTag src="image" text="IconTag" type="success" />);

    const element = screen.getByTestId("tag");

    expect(element).toHaveStyleRule("background-color", "#50c878");
    expect(within(element).getByText("IconTag")).toHaveStyleRule(
      "color",
      "#fff",
    );
  });

  it("should render component with alert type", () => {
    render(<IconTag src="image" text="IconTag" type="alert" />);

    const element = screen.getByTestId("tag");

    expect(element).toHaveStyleRule("background-color", "#f8de7e");
    expect(within(element).getByText("IconTag")).toHaveStyleRule(
      "color",
      "#fff",
    );
  });

  it("should render component with error type", () => {
    render(<IconTag src="image" text="IconTag" type="error" />);

    const element = screen.getByTestId("tag");

    expect(element).toHaveStyleRule("background-color", "#e97451");
    expect(within(element).getByText("IconTag")).toHaveStyleRule(
      "color",
      "#fff",
    );
  });

  it("should render component with custom background color", () => {
    render(<IconTag src="image" text="IconTag" backgroundColor="#fff" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule(
      "background-color",
      "#fff",
    );
  });

  it("should render component with semi rounded format", () => {
    render(<IconTag src="image" text="IconTag" format="semiRounded" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("border-radius", "5px");
  });

  it("should render component with rounded format", () => {
    render(<IconTag src="image" text="IconTag" format="rounded" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("border-radius", "30px");
  });

  it("should render component with custom border radius", () => {
    render(<IconTag src="image" text="IconTag" borderRadius="20px" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("border-radius", "20px");
  });

  it("should render component with medium size", () => {
    render(<IconTag src="image" text="IconTag" size="medium" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("padding", "10px 12px");
  });

  it("should render component with large size", () => {
    render(<IconTag src="image" text="IconTag" size="large" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("padding", "15px 20px");
  });

  it("should render component with custom size", () => {
    render(<IconTag src="image" text="IconTag" padding="20px 10px" />);

    expect(screen.getByTestId("tag")).toHaveStyleRule("padding", "20px 10px");
  });

  it("should render component with custom text color", () => {
    render(<IconTag src="image" text="IconTag" textColor="#000" />);

    const element = screen.getByTestId("tag");

    expect(within(element).getByText("IconTag")).toHaveStyleRule(
      "color",
      "#000",
    );
  });

  it("should render component with custom text font weight", () => {
    render(<IconTag src="image" text="IconTag" textFontWeight={200} />);

    const element = screen.getByTestId("tag");

    expect(within(element).getByText("IconTag")).toHaveStyleRule(
      "font-weight",
      "200",
    );
  });

  it("should render component with custom text font size", () => {
    render(<IconTag src="image" text="IconTag" textFontSize="30px" />);

    const element = screen.getByTestId("tag");

    expect(within(element).getByText("IconTag")).toHaveStyleRule(
      "font-size",
      "30px",
    );
  });

  it("should render component with custom text font family", () => {
    render(
      <IconTag src="image" text="IconTag" textFontFamily="Times New Roman" />,
    );

    const element = screen.getByTestId("tag");

    expect(within(element).getByText("IconTag")).toHaveStyleRule(
      "font-family",
      "Times New Roman",
    );
  });

  it("should render component with custom height", () => {
    render(<IconTag src="image" text="IconTag" iconHeight="20px" />);

    const element = screen.getByTestId("tag").childNodes[0];

    expect(element).toHaveStyleRule("height", "20px");
    expect(element).toHaveStyleRule("width", "auto");
  });

  it("should render component with custom image width", () => {
    render(<IconTag src="image" text="IconTag" iconWidth="20px" />);

    const element = screen.getByTestId("tag").childNodes[0];

    expect(element).toHaveStyleRule("width", "20px");
    expect(element).toHaveStyleRule("height", "auto");
  });

  it("should render component with custom image height and width", () => {
    render(
      <IconTag src="image" text="IconTag" iconHeight="20px" iconWidth="20px" />,
    );

    const element = screen.getByTestId("tag").childNodes[0];

    expect(element).toHaveStyleRule("height", "20px");
    expect(element).toHaveStyleRule("width", "20px");
  });

  it("should render component with semi rounded format image", () => {
    render(<IconTag src="image" text="IconTag" iconFormat="semiRounded" />);

    expect(screen.getByRole("img", { name: "" })).toHaveStyleRule(
      "border-radius",
      "5px",
    );
  });

  it("should render component with rounded format image", () => {
    render(<IconTag src="image" text="IconTag" iconFormat="rounded" />);

    expect(screen.getByRole("img", { name: "" })).toHaveStyleRule(
      "border-radius",
      "30px",
    );
  });

  it("should render component with custom border radius image", () => {
    render(<IconTag src="image" text="IconTag" iconBorderRadius="20px" />);

    expect(screen.getByRole("img", { name: "" })).toHaveStyleRule(
      "border-radius",
      "20px",
    );
  });
});
