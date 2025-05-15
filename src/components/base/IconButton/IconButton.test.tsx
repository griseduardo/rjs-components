import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import IconButton from "./IconButton";

describe("<IconButton />", () => {
  it("should render component with default properties", () => {
    render(<IconButton src="image" text="IconButton" />);

    const iconButtonElement = screen.getByRole("button", {
      name: "IconButton",
    });
    const imageElement = iconButtonElement.childNodes[0];

    expect(iconButtonElement).toBeInTheDocument();
    expect(iconButtonElement).toHaveStyleRule("background-color", "#d3d3d3");
    expect(iconButtonElement).toHaveStyleRule("padding", "7px");
    expect(iconButtonElement).not.toBeDisabled;
    expect(within(iconButtonElement).getByText("IconButton")).toHaveStyleRule(
      "color",
      "#000",
    );
    expect(imageElement).toHaveStyleRule("padding", "0 7px 0 0");
    expect(imageElement).toHaveStyleRule("height", "30px");
    expect(imageElement).toHaveStyleRule("width", "auto");
  });

  it("should render component with custom background color", () => {
    render(<IconButton src="image" text="IconButton" backgroundColor="#fff" />);

    expect(screen.getByRole("button", { name: "IconButton" })).toHaveStyleRule(
      "background-color",
      "#fff",
    );
  });

  it("should render component with semi rounded format", () => {
    render(<IconButton src="image" text="IconButton" format="semiRounded" />);

    expect(screen.getByRole("button", { name: "IconButton" })).toHaveStyleRule(
      "border-radius",
      "5px",
    );
  });

  it("should render component with rounded format", () => {
    render(<IconButton src="image" text="IconButton" format="rounded" />);

    expect(screen.getByRole("button", { name: "IconButton" })).toHaveStyleRule(
      "border-radius",
      "30px",
    );
  });

  it("should render component with custom border radius", () => {
    render(<IconButton src="image" text="IconButton" borderRadius="20px" />);

    expect(screen.getByRole("button", { name: "IconButton" })).toHaveStyleRule(
      "border-radius",
      "20px",
    );
  });

  it("should render component with medium size", () => {
    render(<IconButton src="image" text="IconButton" size="medium" />);

    expect(screen.getByRole("button", { name: "IconButton" })).toHaveStyleRule(
      "padding",
      "10px 12px",
    );
  });

  it("should render component with large size", () => {
    render(<IconButton src="image" text="IconButton" size="large" />);

    expect(screen.getByRole("button", { name: "IconButton" })).toHaveStyleRule(
      "padding",
      "15px 20px",
    );
  });

  it("should render component with custom size", () => {
    render(<IconButton src="image" text="IconButton" padding="20px 10px" />);

    expect(screen.getByRole("button", { name: "IconButton" })).toHaveStyleRule(
      "padding",
      "20px 10px",
    );
  });

  it("should render component and click it", async () => {
    const onClick = jest.fn();

    render(<IconButton src="image" text="IconButton" onClick={onClick} />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: "IconButton" }));
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should render component disabled", () => {
    const onClick = jest.fn();

    render(
      <IconButton src="image" text="IconButton" onClick={onClick} disabled />,
    );

    expect(screen.getByRole("button", { name: "IconButton" })).toBeDisabled;
  });

  it("should render component with custom text color", () => {
    render(<IconButton src="image" text="IconButton" textColor="#fff" />);

    const element = screen.getByRole("button", { name: "IconButton" });

    expect(within(element).getByText("IconButton")).toHaveStyleRule(
      "color",
      "#fff",
    );
  });

  it("should render component with custom text font weight", () => {
    render(<IconButton src="image" text="IconButton" textFontWeight={200} />);

    const element = screen.getByRole("button", { name: "IconButton" });

    expect(within(element).getByText("IconButton")).toHaveStyleRule(
      "font-weight",
      "200",
    );
  });

  it("should render component with custom text font size", () => {
    render(<IconButton src="image" text="IconButton" textFontSize="30px" />);

    const element = screen.getByRole("button", { name: "IconButton" });

    expect(within(element).getByText("IconButton")).toHaveStyleRule(
      "font-size",
      "30px",
    );
  });

  it("should render component with custom text font family", () => {
    render(
      <IconButton
        src="image"
        text="IconButton"
        textFontFamily="Times New Roman"
      />,
    );

    const element = screen.getByRole("button", { name: "IconButton" });

    expect(within(element).getByText("IconButton")).toHaveStyleRule(
      "font-family",
      "Times New Roman",
    );
  });

  it("should render component with custom height", () => {
    render(<IconButton src="image" text="IconButton" iconHeight="20px" />);

    const iconButtonElement = screen.getByRole("button", {
      name: "IconButton",
    });
    const imageElement = iconButtonElement.childNodes[0];

    expect(imageElement).toHaveStyleRule("height", "20px");
    expect(imageElement).toHaveStyleRule("width", "auto");
  });

  it("should render component with custom image width", () => {
    render(<IconButton src="image" text="IconButton" iconWidth="20px" />);

    const iconButtonElement = screen.getByRole("button", {
      name: "IconButton",
    });
    const imageElement = iconButtonElement.childNodes[0];

    expect(imageElement).toHaveStyleRule("width", "20px");
    expect(imageElement).toHaveStyleRule("height", "auto");
  });

  it("should render component with custom image height and width", () => {
    render(
      <IconButton
        src="image"
        text="IconButton"
        iconHeight="20px"
        iconWidth="20px"
      />,
    );

    const iconButtonElement = screen.getByRole("button", {
      name: "IconButton",
    });
    const imageElement = iconButtonElement.childNodes[0];

    expect(imageElement).toHaveStyleRule("height", "20px");
    expect(imageElement).toHaveStyleRule("width", "20px");
  });

  it("should render component with semi rounded format image", () => {
    render(
      <IconButton src="image" text="IconButton" iconFormat="semiRounded" />,
    );

    expect(screen.getByRole("img", { name: "" })).toHaveStyleRule(
      "border-radius",
      "5px",
    );
  });

  it("should render component with rounded format image", () => {
    render(<IconButton src="image" text="IconButton" iconFormat="rounded" />);

    expect(screen.getByRole("img", { name: "" })).toHaveStyleRule(
      "border-radius",
      "30px",
    );
  });

  it("should render component with custom border radius image", () => {
    render(
      <IconButton src="image" text="IconButton" iconBorderRadius="20px" />,
    );

    expect(screen.getByRole("img", { name: "" })).toHaveStyleRule(
      "border-radius",
      "20px",
    );
  });
});
