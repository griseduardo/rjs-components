import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "IconButton",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const IconPlacement: Story = {
  args: {
    text: "IconButton",
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} iconPlacement="left" />
      <IconButton {...args} iconPlacement="right" />
    </StorybookContainer>
  ),
};

export const PredefinedFormat: Story = {
  args: {
    text: "IconButton",
    format: "square",
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} />
      <IconButton {...args} format="semiRounded" />
      <IconButton {...args} format="rounded" />
    </StorybookContainer>
  ),
};

export const PredefinedSize: Story = {
  args: {
    text: "IconButton",
    size: "small",
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} />
      <IconButton {...args} size="medium" />
      <IconButton {...args} size="large" />
    </StorybookContainer>
  ),
};

export const PredefinedIconFormat: Story = {
  args: {
    text: "IconButton",
    src: "/example.jpg",
    format: "square",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} />
      <IconButton {...args} iconFormat="semiRounded" />
      <IconButton {...args} iconFormat="rounded" />
    </StorybookContainer>
  ),
};

export const Color: Story = {
  args: {
    text: "IconButton",
    backgroundColor: "#d3d3d3",
    hoverColor: "#a9a9a9",
    textColor: "#000",
    src: "/example.jpg",
  },
  render: (args) => (
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
  ),
};

export const CustomFormat: Story = {
  args: {
    text: "IconButton",
    borderRadius: "0",
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} />
      <IconButton {...args} borderRadius="15px 2px" />
    </StorybookContainer>
  ),
};

export const CustomSize: Story = {
  args: {
    text: "IconButton",
    padding: "7px",
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} />
      <IconButton {...args} padding="20px 40px" />
    </StorybookContainer>
  ),
};

export const TextProperty: Story = {
  args: {
    text: "IconButton",
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} />
      <IconButton {...args} textFontWeight={100} />
      <IconButton {...args} textFontFamily="Times New Roman" />
      <IconButton {...args} textFontSize="20px" />
    </StorybookContainer>
  ),
};

export const IconHeight: Story = {
  args: {
    text: "IconButton",
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} />
      <IconButton {...args} iconHeight="20px" />
    </StorybookContainer>
  ),
};

export const IconWidth: Story = {
  args: {
    text: "IconButton",
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} />
      <IconButton {...args} iconWidth="20px" />
    </StorybookContainer>
  ),
};

export const IconHeightAndWidth: Story = {
  args: {
    text: "IconButton",
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} />
      <IconButton {...args} iconHeight="20px" iconWidth="20px" />
    </StorybookContainer>
  ),
};

export const CustomIconFormat: Story = {
  args: {
    text: "IconButton",
    src: "/example.jpg",
    borderRadius: "0",
  },
  render: (args) => (
    <StorybookContainer>
      <IconButton {...args} />
      <IconButton {...args} iconBorderRadius="15px 2px" />
    </StorybookContainer>
  ),
};
