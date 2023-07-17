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
    <p>- Default</p>
    <Text {...args}>Text</Text>
    <p>- Update color</p>
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
    <p>- Update weight</p>
    <p>normal (default)</p>
    <Text {...args}>Text</Text>
    <p>bold</p>
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
    <p>- Default</p>
    <Text {...args}>Text</Text>
    <p>- Update fontWeight</p>
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
    <p>- Default</p>
    <Text {...args}>Text</Text>
    <p>- Update fontSize</p>
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
    <p>- Default</p>
    <Text {...args}>Text</Text>
    <p>- Update fontFamily</p>
    <Text {...args} fontFamily={"Times New Roman"}>
      Text
    </Text>
  </>
);

FontFamily.args = {
  fontFamily: "Arial",
};
