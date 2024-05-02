import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Img from "./Img";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Img> = {
  component: Img,
  title: "Img",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Img>;

export const PredefinedFormat: Story = (args) => (
  <StorybookContainer>
    <Img {...args} />
    <Img {...args} format="semiRounded" />
    <Img {...args} format="rounded" />
  </StorybookContainer>
);

PredefinedFormat.args = {
  src: "/example.jpg",
  format: "default",
};

export const Height: Story = (args) => (
  <StorybookContainer>
    <Img {...args} />
    <Img {...args} height="200px" />
  </StorybookContainer>
);

Height.args = {
  src: "/example.jpg",
};

export const Width: Story = (args) => (
  <StorybookContainer>
    <Img {...args} />
    <Img {...args} width="200px" />
  </StorybookContainer>
);

Width.args = {
  src: "/example.jpg",
};

export const HeightAndWidth: Story = (args) => (
  <StorybookContainer>
    <Img {...args} />
    <Img {...args} height="200px" width="200px" />
  </StorybookContainer>
);

HeightAndWidth.args = {
  src: "/example.jpg",
};

export const CustomFormat: Story = (args) => (
  <StorybookContainer>
    <Img {...args} />
    <Img {...args} borderRadius="15px 2px" />
  </StorybookContainer>
);

CustomFormat.args = {
  src: "/example.jpg",
  borderRadius: "0",
};
