import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Text",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Color: Story = (args) => (
  <>
    <p>Default:</p>
    <Text {...args}>Text</Text>
    <p>color: #800080</p>
    <Text {...args} color={"#800080"}>
      Text
    </Text>
    <p>color: #008000</p>
    <Text {...args} color={"#008000"}>
      Text
    </Text>
  </>
);

Color.args = {
  color: "#000",
};

export const PredefinedWeight: Story = (args) => (
  <>
    <p>Default:</p>
    <Text {...args}>Text</Text>
    <p>Bold:</p>
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
    <p>Default:</p>
    <Text {...args}>Text</Text>
    <p>fontWeight: 200</p>
    <Text {...args} fontWeight={200}>
      Text
    </Text>
    <p>fontWeight: 900</p>
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
    <p>Default:</p>
    <Text {...args}>Text</Text>
    <p>fontSize: 20px</p>
    <Text {...args} fontSize={"20px"}>
      Text
    </Text>
    <p>fontSize: 30px</p>
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
    <p>Default:</p>
    <Text {...args}>Text</Text>
    <p>fontFamily: Times New Roman</p>
    <Text {...args} fontFamily={"Times New Roman"}>
      Text
    </Text>
    <p>fontFamily: Lucida Console</p>
    <Text {...args} fontFamily={"Lucida Console"}>
      Text
    </Text>
  </>
);

FontFamily.args = {
  fontFamily: "Arial",
};
