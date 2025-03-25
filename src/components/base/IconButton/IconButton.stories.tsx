import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "IconButton",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const IconPlacement: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} iconPlacement="left" />
    <IconButton {...args} iconPlacement="right" />
  </StorybookContainer>
);

IconPlacement.args = {
  text: "IconButton",
  src: "/example.jpg",
};

export const PredefinedFormat: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} format="semiRounded" />
    <IconButton {...args} format="rounded" />
  </StorybookContainer>
);

PredefinedFormat.args = {
  text: "IconButton",
  format: "default",
  src: "/example.jpg",
};

export const PredefinedSize: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} size="medium" />
    <IconButton {...args} size="large" />
  </StorybookContainer>
);

PredefinedSize.args = {
  text: "IconButton",
  size: "small",
  src: "/example.jpg",
};

export const PredefinedIconFormat: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} iconFormat="semiRounded" />
    <IconButton {...args} iconFormat="rounded" />
  </StorybookContainer>
);

PredefinedIconFormat.args = {
  text: "IconButton",
  src: "/example.jpg",
  format: "default",
};

export const Color: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} disabled />
    <IconButton {...args} backgroundColor="#ee4b2b" hoverColor="#d22b2b" />
    <IconButton
      {...args}
      disabled
      backgroundColor="#ee4b2b"
      hoverColor="#d22b2b"
    />
    <IconButton
      {...args}
      backgroundColor="#ee4b2b"
      hoverColor="#d22b2b"
      textColor="#fff"
    />
    <IconButton
      {...args}
      disabled
      backgroundColor="#ee4b2b"
      hoverColor="#d22b2b"
      textColor="#fff"
    />
  </StorybookContainer>
);

Color.args = {
  text: "IconButton",
  backgroundColor: "#d3d3d3",
  hoverColor: "#a9a9a9",
  textColor: "#000",
  src: "/example.jpg",
};

export const CustomFormat: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} borderRadius="15px 2px" />
  </StorybookContainer>
);

CustomFormat.args = {
  text: "IconButton",
  borderRadius: "0",
  src: "/example.jpg",
};

export const CustomSize: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} padding="20px 40px" />
  </StorybookContainer>
);

CustomSize.args = {
  text: "IconButton",
  padding: "7px",
  src: "/example.jpg",
};

export const TextProperty: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} textWeight="bold" />
    <IconButton {...args} textFontWeight={100} />
    <IconButton {...args} textFontFamily="Times New Roman" />
    <IconButton {...args} textFontSize="20px" />
  </StorybookContainer>
);

TextProperty.args = {
  text: "IconButton",
  src: "/example.jpg",
};

export const IconHeight: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} iconHeight="20px" />
  </StorybookContainer>
);

IconHeight.args = {
  text: "IconButton",
  src: "/example.jpg",
};

export const IconWidth: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} iconWidth="20px" />
  </StorybookContainer>
);

IconWidth.args = {
  text: "IconButton",
  src: "/example.jpg",
};

export const IconHeightAndWidth: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} iconHeight="20px" iconWidth="20px" />
  </StorybookContainer>
);

IconHeightAndWidth.args = {
  text: "IconButton",
  src: "/example.jpg",
};

export const CustomIconFormat: Story = (args) => (
  <StorybookContainer>
    <IconButton {...args} />
    <IconButton {...args} iconBorderRadius="15px 2px" />
  </StorybookContainer>
);

CustomIconFormat.args = {
  text: "IconButton",
  src: "/example.jpg",
  borderRadius: "0",
};
