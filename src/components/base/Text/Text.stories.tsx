import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Text",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const PredefinedFontWeight: Story = (args) => (
  <StorybookContainer>
    <Text {...args}>Text</Text>
    <Text {...args} weight="bold">
      Text
    </Text>
  </StorybookContainer>
);

PredefinedFontWeight.args = {
  weight: "normal",
};

export const Color: Story = (args) => (
  <StorybookContainer>
    <Text {...args}>Text</Text>
    <Text {...args} color="#800080">
      Text
    </Text>
  </StorybookContainer>
);

Color.args = {
  color: "#000",
};

export const CustomFontWeight: Story = (args) => (
  <StorybookContainer>
    <Text {...args}>Text</Text>
    <Text {...args} fontWeight={900}>
      Text
    </Text>
  </StorybookContainer>
);

CustomFontWeight.args = {
  fontWeight: 400,
};

export const FontSize: Story = (args) => (
  <StorybookContainer>
    <Text {...args}>Text</Text>
    <Text {...args} fontSize="30px">
      Text
    </Text>
  </StorybookContainer>
);

FontSize.args = {
  fontSize: "16px",
};

export const FontFamily: Story = (args) => (
  <StorybookContainer>
    <Text {...args}>Text</Text>
    <Text {...args} fontFamily="Times New Roman">
      Text
    </Text>
  </StorybookContainer>
);

FontFamily.args = {
  fontFamily: "Arial",
};
