import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import Paragraph from "../Paragraph/Paragraph";
import Div from "../Div/Div";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Text",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Color: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Text {...args}>Text</Text>
    </Div>
    <Paragraph>- Update color</Paragraph>
    <Div margin="0 10px">
      <Text {...args} color={"#800080"}>
        Text
      </Text>
    </Div>
  </>
);

Color.args = {
  color: "#000",
};

export const PredefinedWeight: Story = (args) => (
  <>
    <Text>- Update weight</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>normal (default)</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Text {...args}>Text</Text>
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>bold</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Text {...args} weight={"bold"}>
            Text
          </Text>
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedWeight.args = {
  weight: "normal",
};

export const CustomFontWeight: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Text {...args}>Text</Text>
    </Div>
    <Paragraph>- Update fontWeight</Paragraph>
    <Div margin="0 10px">
      <Text {...args} fontWeight={900}>
        Text
      </Text>
    </Div>
  </>
);

CustomFontWeight.args = {
  fontWeight: 400,
};

export const FontSize: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Text {...args}>Text</Text>
    </Div>
    <Paragraph>- Update fontSize</Paragraph>
    <Div margin="0 10px">
      <Text {...args} fontSize={"30px"}>
        Text
      </Text>
    </Div>
  </>
);

FontSize.args = {
  fontSize: "16px",
};

export const FontFamily: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Text {...args}>Text</Text>
    </Div>
    <Paragraph>- Update fontFamily</Paragraph>
    <Div margin="0 10px">
      <Text {...args} fontFamily={"Times New Roman"}>
        Text
      </Text>
    </Div>
  </>
);

FontFamily.args = {
  fontFamily: "Arial",
};
