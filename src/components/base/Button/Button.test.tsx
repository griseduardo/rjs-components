import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("<Button />", () => {
  it("should render component with default properties", () => {
    render(<Button text="Button" />);

    const element = screen.getByRole("button", { name: "Button" });

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyleRule("background-color", "#10b981");
    expect(element).toHaveStyleRule("border-radius", "5px");
    expect(element).toHaveStyleRule("padding", "13px");
    expect(element).toHaveStyleRule("border", "none");
    expect(element).not.toBeDisabled;
    expect(within(element).getByText("Button")).toHaveStyleRule(
      "color",
      "#fff",
    );
  });

  it("should render component with type secondary properties", () => {
    render(<Button text="Button" type="secondary" />);

    const element = screen.getByRole("button", { name: "Button" });

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyleRule("background-color", "#fff");
    expect(element).toHaveStyleRule("border-radius", "5px");
    expect(element).toHaveStyleRule("padding", "12px");
    expect(element).toHaveStyleRule("border", "1px solid #10b981");
    expect(element).not.toBeDisabled;
    expect(within(element).getByText("Button")).toHaveStyleRule(
      "color",
      "#10b981",
    );
  });

  it("should render component with custom background color", () => {
    render(<Button text="Button" backgroundColor="#fff" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "background-color",
      "#fff",
    );
  });

  it("should render component with square format", () => {
    render(<Button text="Button" format="square" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "border-radius",
      "0",
    );
  });

  it("should render component with rounded format", () => {
    render(<Button text="Button" format="rounded" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "border-radius",
      "30px",
    );
  });

  it("should render component with custom border radius", () => {
    render(<Button text="Button" borderRadius="20px" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "border-radius",
      "20px",
    );
  });

  it("should render component with small size", () => {
    render(<Button text="Button" size="small" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "padding",
      "9px",
    );
  });

  it("should render component with large size", () => {
    render(<Button text="Button" size="large" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "padding",
      "19px 16px",
    );
  });

  it("should render component with custom size", () => {
    render(<Button text="Button" padding="20px 10px" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "padding",
      "20px 10px",
    );
  });

  it("should render component with custom border", () => {
    render(<Button text="Button" border="2px solid #fff" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "border",
      "2px solid #fff",
    );
  });

  it("should render component and click it", async () => {
    const onClick = jest.fn();

    render(<Button text="Button" onClick={onClick} />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: "Button" }));
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should render component disabled", () => {
    const onClick = jest.fn();

    render(<Button text="Button" onClick={onClick} disabled />);

    expect(screen.getByRole("button", { name: "Button" })).toBeDisabled;
  });

  it("should render component with custom text color", () => {
    render(<Button text="Button" textColor="#fff" />);

    const element = screen.getByRole("button", { name: "Button" });

    expect(within(element).getByText("Button")).toHaveStyleRule(
      "color",
      "#fff",
    );
  });

  it("should render component with custom text font weight", () => {
    render(<Button text="Button" textFontWeight={200} />);

    const element = screen.getByRole("button", { name: "Button" });

    expect(within(element).getByText("Button")).toHaveStyleRule(
      "font-weight",
      "200",
    );
  });

  it("should render component with custom text font size", () => {
    render(<Button text="Button" textFontSize="30px" />);

    const element = screen.getByRole("button", { name: "Button" });

    expect(within(element).getByText("Button")).toHaveStyleRule(
      "font-size",
      "30px",
    );
  });

  it("should render component with custom text font family", () => {
    render(<Button text="Button" textFontFamily="Times New Roman" />);

    const element = screen.getByRole("button", { name: "Button" });

    expect(within(element).getByText("Button")).toHaveStyleRule(
      "font-family",
      "Times New Roman",
    );
  });

  it("should render component with custom text color", () => {
    render(<Button text="Button" textColor="#000" />);

    const element = screen.getByRole("button", { name: "Button" });

    expect(within(element).getByText("Button")).toHaveStyleRule(
      "color",
      "#000",
    );
  });

  it("should render component with image", () => {
    render(<Button src="image" text="Button" />);

    const buttonElement = screen.getByRole("button", { name: "Button" });
    const imageElement = buttonElement.childNodes[0];

    expect(imageElement).toHaveStyleRule("padding", "0 12px 0 0");
    expect(imageElement).toHaveStyleRule("height", "30px");
    expect(imageElement).toHaveStyleRule("width", "auto");
  });

  it("should render component with custom image width", () => {
    render(<Button src="image" text="Button" iconWidth="20px" />);

    const buttonElement = screen.getByRole("button", { name: "Button" });
    const imageElement = buttonElement.childNodes[0];

    expect(imageElement).toHaveStyleRule("width", "20px");
    expect(imageElement).toHaveStyleRule("height", "auto");
  });

  it("should render component with custom image height", () => {
    render(<Button src="image" text="Button" iconHeight="20px" />);

    const buttonElement = screen.getByRole("button", { name: "Button" });
    const imageElement = buttonElement.childNodes[0];

    expect(imageElement).toHaveStyleRule("height", "20px");
    expect(imageElement).toHaveStyleRule("width", "auto");
  });

  it("should render component with custom image height and width", () => {
    render(
      <Button src="image" text="Button" iconHeight="20px" iconWidth="20px" />,
    );

    const buttonElement = screen.getByRole("button", { name: "Button" });
    const imageElement = buttonElement.childNodes[0];

    expect(imageElement).toHaveStyleRule("height", "20px");
    expect(imageElement).toHaveStyleRule("width", "20px");
  });

  it("should render component with custom border radius image", () => {
    render(<Button src="image" text="Button" iconBorderRadius="20px" />);

    expect(screen.getByRole("img", { name: "" })).toHaveStyleRule(
      "border-radius",
      "20px",
    );
  });
});
