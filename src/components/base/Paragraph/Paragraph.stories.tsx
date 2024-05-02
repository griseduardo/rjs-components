import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./Paragraph";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  title: "Paragraph",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

export const PredefinedFontWeight: Story = (args) => (
  <StorybookContainer>
    <Paragraph {...args}>Paragraph</Paragraph>
    <Paragraph {...args} weight="bold">
      Paragraph
    </Paragraph>
  </StorybookContainer>
);

PredefinedFontWeight.args = {
  weight: "normal",
};

export const Color: Story = (args) => (
  <StorybookContainer>
    <Paragraph {...args}>Paragraph</Paragraph>
    <Paragraph {...args} color="#800080">
      Paragraph
    </Paragraph>
  </StorybookContainer>
);

Color.args = {
  color: "#000",
};

export const CustomFontWeight: Story = (args) => (
  <StorybookContainer>
    <Paragraph {...args}>Paragraph</Paragraph>
    <Paragraph {...args} fontWeight={900}>
      Paragraph
    </Paragraph>
  </StorybookContainer>
);

CustomFontWeight.args = {
  fontWeight: 400,
};

export const FontSize: Story = (args) => (
  <StorybookContainer>
    <Paragraph {...args}>Paragraph</Paragraph>
    <Paragraph {...args} fontSize="30px">
      Paragraph
    </Paragraph>
  </StorybookContainer>
);

FontSize.args = {
  fontSize: "16px",
};

export const FontFamily: Story = (args) => (
  <StorybookContainer>
    <Paragraph {...args}>Paragraph</Paragraph>
    <Paragraph {...args} fontFamily="Times New Roman">
      Paragraph
    </Paragraph>
  </StorybookContainer>
);

FontFamily.args = {
  fontFamily: "Arial",
};
