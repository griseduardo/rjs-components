import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  title: "Paragraph",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Color: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Paragraph {...args}>Paragraph</Paragraph>
    <Paragraph>- Update color</Paragraph>
    <Paragraph {...args} color={"#800080"}>
      Paragraph
    </Paragraph>
  </>
);

Color.args = {
  color: "#000",
};

export const PredefinedWeight: Story = (args) => (
  <>
    <Paragraph>- Update weight</Paragraph>
    <Paragraph>normal (default)</Paragraph>
    <Paragraph {...args}>Paragraph</Paragraph>
    <Paragraph>bold</Paragraph>
    <Paragraph {...args} weight={"bold"}>
      Paragraph
    </Paragraph>
  </>
);

PredefinedWeight.args = {
  weight: "normal",
};

export const CustomFontWeight: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Paragraph {...args}>Paragraph</Paragraph>
    <Paragraph>- Update fontWeight</Paragraph>
    <Paragraph {...args} fontWeight={900}>
      Paragraph
    </Paragraph>
  </>
);

CustomFontWeight.args = {
  fontWeight: 400,
};

export const FontSize: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Paragraph {...args}>Paragraph</Paragraph>
    <Paragraph>- Update fontSize</Paragraph>
    <Paragraph {...args} fontSize={"30px"}>
      Paragraph
    </Paragraph>
  </>
);

FontSize.args = {
  fontSize: "16px",
};

export const FontFamily: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Paragraph {...args}>Paragraph</Paragraph>
    <Paragraph>- Update fontFamily</Paragraph>
    <Paragraph {...args} fontFamily={"Times New Roman"}>
      Paragraph
    </Paragraph>
  </>
);

FontFamily.args = {
  fontFamily: "Arial",
};
