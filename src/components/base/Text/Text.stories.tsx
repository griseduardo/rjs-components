import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import Paragraph from "../Paragraph/Paragraph";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Text",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Color: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Text {...args}>Text</Text>
    <Paragraph>- Update color</Paragraph>
    <Text {...args} color={"#800080"}>
      Text
    </Text>
  </>
);

Color.args = {
  color: "#000",
};

export const PredefinedWeight: Story = (args) => (
  <>
    <Paragraph>- Update weight</Paragraph>
    <Paragraph>normal (default)</Paragraph>
    <Text {...args}>Text</Text>
    <Paragraph>bold</Paragraph>
    <Text {...args} weight={"bold"}>
      Text
    </Text>
  </>
);

PredefinedWeight.args = {
  weight: "normal",
};

export const CustomFontWeight: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Text {...args}>Text</Text>
    <Paragraph>- Update fontWeight</Paragraph>
    <Text {...args} fontWeight={900}>
      Text
    </Text>
  </>
);

CustomFontWeight.args = {
  fontWeight: 400,
};

export const FontSize: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Text {...args}>Text</Text>
    <Paragraph>- Update fontSize</Paragraph>
    <Text {...args} fontSize={"30px"}>
      Text
    </Text>
  </>
);

FontSize.args = {
  fontSize: "16px",
};

export const FontFamily: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Text {...args}>Text</Text>
    <Paragraph>- Update fontFamily</Paragraph>
    <Text {...args} fontFamily={"Times New Roman"}>
      Text
    </Text>
  </>
);

FontFamily.args = {
  fontFamily: "Arial",
};
