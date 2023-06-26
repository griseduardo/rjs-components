import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("<Button />", () => {
  it("should render component with default properties", () => {
    render(<Button text="Button" />);

    const element = screen.getByRole("button", { name: "Button" });

    expect(element).toBeInTheDocument;
    expect(element).toHaveStyleRule("color", "#000");
    expect(element).toHaveStyleRule("background-color", "#d3d3d3");
    expect(element).toHaveStyleRule("border-radius", "0px");
    expect(element).toHaveStyleRule("padding", "7px");
    expect(element).not.toBeDisabled;
  });

  it("should render component with custom text color", () => {
    render(<Button text="Button" textColor="#fff" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "color",
      "#fff"
    );
  });

  it("should render component with custom background color", () => {
    render(<Button text="Button" backgroundColor="#fff" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "background-color",
      "#fff"
    );
  });

  it("should render component with semi rounded format", () => {
    render(<Button text="Button" format="semiRounded" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "border-radius",
      "5px"
    );
  });

  it("should render component with rounded format", () => {
    render(<Button text="Button" format="rounded" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "border-radius",
      "30px"
    );
  });

  it("should render component with custom border radius", () => {
    render(<Button text="Button" borderRadius="20px" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "border-radius",
      "20px"
    );
  });

  it("should render component with medium size", () => {
    render(<Button text="Button" size="medium" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "padding",
      "10px 12px"
    );
  });

  it("should render component with large size", () => {
    render(<Button text="Button" size="large" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "padding",
      "15px 20px"
    );
  });

  it("should render component with custom size", () => {
    render(<Button text="Button" padding="20px 10px" />);

    expect(screen.getByRole("button", { name: "Button" })).toHaveStyleRule(
      "padding",
      "20px 10px"
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

  it("should render component disabled and not click it", async () => {
    const onClick = jest.fn();

    render(<Button text="Button" onClick={onClick} disabled />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: "Button" }));
    });

    expect(screen.getByRole("button", { name: "Button" })).toBeDisabled;
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
