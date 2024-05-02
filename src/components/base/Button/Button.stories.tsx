import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const PredefinedFormat: Story = (args) => (
  <StorybookContainer>
    <Button {...args} />
    <Button {...args} format="semiRounded" />
    <Button {...args} format="rounded" />
  </StorybookContainer>
);

PredefinedFormat.args = {
  text: "Button",
  format: "default",
};

export const PredefinedSize: Story = (args) => (
  <StorybookContainer>
    <Button {...args} />
    <Button {...args} size="medium" />
    <Button {...args} size="large" />
  </StorybookContainer>
);

PredefinedSize.args = {
  text: "Button",
  size: "small",
};

export const Color: Story = (args) => (
  <StorybookContainer>
    <Button {...args} />
    <Button {...args} disabled />
    <Button {...args} backgroundColor="#ee4b2b" hoverColor="#d22b2b" />
    <Button {...args} disabled backgroundColor="#ee4b2b" hoverColor="#d22b2b" />
    <Button
      {...args}
      backgroundColor="#ee4b2b"
      hoverColor="#d22b2b"
      textColor="#fff"
    />
    <Button
      {...args}
      disabled
      backgroundColor="#ee4b2b"
      hoverColor="#d22b2b"
      textColor="#fff"
    />
  </StorybookContainer>
);

Color.args = {
  text: "Button",
  backgroundColor: "#d3d3d3",
  hoverColor: "#a9a9a9",
  textColor: "#000",
};

export const CustomFormat: Story = (args) => (
  <StorybookContainer>
    <Button {...args} />
    <Button {...args} borderRadius="15px 2px" />
  </StorybookContainer>
);

CustomFormat.args = {
  text: "Button",
  borderRadius: "0",
};

export const CustomSize: Story = (args) => (
  <StorybookContainer>
    <Button {...args} />
    <Button {...args} padding="20px 40px" />
  </StorybookContainer>
);

CustomSize.args = {
  text: "Button",
  padding: "7px",
};

export const TextProperty: Story = (args) => (
  <StorybookContainer>
    <Button {...args} />
    <Button {...args} textWeight="bold" />
    <Button {...args} textFontWeight={100} />
    <Button {...args} textFontFamily="Times New Roman" />
    <Button {...args} textFontSize="20px" />
  </StorybookContainer>
);

TextProperty.args = {
  text: "Button",
};
