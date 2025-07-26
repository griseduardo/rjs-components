import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import Paragraph from "./Paragraph";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  title: "Paragraph",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: "Paragraph",
  },
  render: (args) => (
    <StorybookContainer>
      <Paragraph {...args}>{args.children}</Paragraph>
    </StorybookContainer>
  ),
};

export const PredefinedFontWeight: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Paragraph {...args}>Paragraph</Paragraph>
      <Paragraph {...args} weight="bold">
        Paragraph
      </Paragraph>
    </StorybookContainer>
  ),
};

export const Color: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Paragraph {...args}>Paragraph</Paragraph>
      <Paragraph {...args} color="#800080">
        Paragraph
      </Paragraph>
    </StorybookContainer>
  ),
};

export const CustomFontWeight: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Paragraph {...args}>Paragraph</Paragraph>
      <Paragraph {...args} fontWeight={900}>
        Paragraph
      </Paragraph>
    </StorybookContainer>
  ),
};

export const CustomFontSize: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Paragraph {...args}>Paragraph</Paragraph>
      <Paragraph {...args} fontSize="20px">
        Paragraph
      </Paragraph>
    </StorybookContainer>
  ),
};

export const FontFamily: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Paragraph {...args}>Paragraph</Paragraph>
      <Paragraph {...args} fontFamily="Arial">
        Paragraph
      </Paragraph>
    </StorybookContainer>
  ),
};
