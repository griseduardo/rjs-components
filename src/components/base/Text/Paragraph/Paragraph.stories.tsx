import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./Paragraph";
import Div from "../../Div/Div";
import Text from "../Text/Text";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  title: "Paragraph",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Color: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Paragraph {...args}>Paragraph</Paragraph>
    </Div>
    <Paragraph>- Update color</Paragraph>
    <Div margin="0 10px">
      <Paragraph {...args} color={"#800080"}>
        Paragraph
      </Paragraph>
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
          <Paragraph {...args}>Paragraph</Paragraph>
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>bold</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Paragraph {...args} weight={"bold"}>
            Paragraph
          </Paragraph>
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
      <Paragraph {...args}>Paragraph</Paragraph>
    </Div>
    <Paragraph>- Update fontWeight</Paragraph>
    <Div margin="0 10px">
      <Paragraph {...args} fontWeight={900}>
        Paragraph
      </Paragraph>
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
      <Paragraph {...args}>Paragraph</Paragraph>
    </Div>
    <Paragraph>- Update fontSize</Paragraph>
    <Div margin="0 10px">
      <Paragraph {...args} fontSize={"30px"}>
        Paragraph
      </Paragraph>
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
      <Paragraph {...args}>Paragraph</Paragraph>
    </Div>
    <Paragraph>- Update fontFamily</Paragraph>
    <Div margin="0 10px">
      <Paragraph {...args} fontFamily={"Times New Roman"}>
        Paragraph
      </Paragraph>
    </Div>
  </>
);

FontFamily.args = {
  fontFamily: "Arial",
};
