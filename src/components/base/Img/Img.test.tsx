import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";

import Img from "./Img";

describe("<Img />", () => {
  it("should render component with default properties", () => {
    render(<Img src="image" />);

    const element = screen.getByRole("img", { name: "" });

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyleRule("height", "auto");
    expect(element).toHaveStyleRule("width", "auto");
  });

  it("should render component with custom height", () => {
    render(<Img src="image" height="20px" />);

    const element = screen.getByRole("img", { name: "" });

    expect(element).toHaveStyleRule("height", "20px");
    expect(element).toHaveStyleRule("width", "auto");
  });

  it("should render component with custom width", () => {
    render(<Img src="image" width="20px" />);

    const element = screen.getByRole("img", { name: "" });

    expect(element).toHaveStyleRule("width", "20px");
    expect(element).toHaveStyleRule("height", "auto");
  });

  it("should render component with custom height and width", () => {
    render(<Img src="image" height="20px" width="20px" />);

    const element = screen.getByRole("img", { name: "" });

    expect(element).toHaveStyleRule("height", "20px");
    expect(element).toHaveStyleRule("width", "20px");
  });

  it("should render component with custom alternate text", () => {
    render(<Img src="image" alt="alt" />);

    expect(screen.getByRole("img", { name: "alt" })).toBeInTheDocument();
  });

  it("should render component with semi rounded format", () => {
    render(<Img src="image" format="semiRounded" />);

    expect(screen.getByRole("img", { name: "" })).toHaveStyleRule(
      "border-radius",
      "5px",
    );
  });

  it("should render component with rounded format", () => {
    render(<Img src="image" format="rounded" />);

    expect(screen.getByRole("img", { name: "" })).toHaveStyleRule(
      "border-radius",
      "30px",
    );
  });

  it("should render component with custom border radius", () => {
    render(<Img src="image" borderRadius="20px" />);

    expect(screen.getByRole("img", { name: "" })).toHaveStyleRule(
      "border-radius",
      "20px",
    );
  });
});
