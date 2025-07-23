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

    render(<Button icon={icon} text="Button" />);

    const buttonElement = screen.getByRole("button", { name: "Button" });
    const imageElement = buttonElement.childNodes[0];

    expect(imageElement).toHaveStyleRule("padding", "0 12px 0 0");
  });
});
