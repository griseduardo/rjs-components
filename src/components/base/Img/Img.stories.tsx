import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import Img from "./Img";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Img> = {
  component: Img,
  title: "Img",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <Img {...args} />
    </StorybookContainer>
  ),
};

export const PredefinedFormat: Story = {
  args: {
    src: "/example.jpg",
    format: "square",
  },
  render: (args) => (
    <StorybookContainer>
      <Img {...args} />
      <Img {...args} format="semiRounded" />
      <Img {...args} format="rounded" />
    </StorybookContainer>
  ),
};

export const Height: Story = {
  args: {
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <Img {...args} />
      <Img {...args} height="200px" />
    </StorybookContainer>
  ),
};

export const Width: Story = {
  args: {
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <Img {...args} />
      <Img {...args} width="200px" />
    </StorybookContainer>
  ),
};

export const ObjectFit: Story = {
  args: {
    src: "/example.jpg",
    width: "200px",
    height: "200px",
  },
  render: (args) => (
    <StorybookContainer>
      <Img {...args} />
      <Img {...args} objectFit="cover" />
    </StorybookContainer>
  ),
};

export const CustomFormat: Story = {
  args: {
    src: "/example.jpg",
  },
  render: (args) => (
    <StorybookContainer>
      <Img {...args} />
      <Img {...args} borderRadius="15px 2px" />
    </StorybookContainer>
  ),
};
