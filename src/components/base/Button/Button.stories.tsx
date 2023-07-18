import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import Paragraph from "../Paragraph/Paragraph";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Color: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Paragraph>Active</Paragraph>
    <Button {...args} />
    <Paragraph>Disabled</Paragraph>
    <Button {...args} disabled={true} />
    <Paragraph>- Update backgroundColor and hoverColor</Paragraph>
    <Paragraph>Active</Paragraph>
    <Button {...args} backgroundColor={"#ee4b2b"} hoverColor={"#d22b2b"} />
    <Paragraph>Disabled</Paragraph>
    <Button
      {...args}
      disabled={true}
      backgroundColor={"#ee4b2b"}
      hoverColor={"#d22b2b"}
    />
    <Paragraph>- Update textColor</Paragraph>
    <Paragraph>Active</Paragraph>
    <Button
      {...args}
      backgroundColor={"#ee4b2b"}
      hoverColor={"#d22b2b"}
      textColor={"#fff"}
    />
    <Paragraph>Disabled</Paragraph>
    <Button
      {...args}
      disabled={true}
      backgroundColor={"#ee4b2b"}
      hoverColor={"#d22b2b"}
      textColor={"#fff"}
    />
  </>
);

Color.args = {
  text: "Button",
  backgroundColor: "#d3d3d3",
  hoverColor: "#a9a9a9",
  textColor: "#000",
};

export const PredefinedFormat: Story = (args) => (
  <>
    <Paragraph>- Update format</Paragraph>
    <Paragraph>default</Paragraph>
    <Button {...args} />
    <Paragraph>semiRounded</Paragraph>
    <Button {...args} format={"semiRounded"} />
    <Paragraph>rounded</Paragraph>
    <Button {...args} format={"rounded"} />
  </>
);

PredefinedFormat.args = {
  text: "Button",
  format: "default",
};

export const CustomFormat: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Button {...args} />
    <Paragraph>- Update borderRadius</Paragraph>
    <Button {...args} borderRadius={"15px 2px"} />
  </>
);

CustomFormat.args = {
  text: "Button",
  borderRadius: "0px",
};

export const PredefinedSize: Story = (args) => (
  <>
    <Paragraph>- Update size</Paragraph>
    <Paragraph>small (default)</Paragraph>
    <Button {...args} />
    <Paragraph>medium</Paragraph>
    <Button {...args} size={"medium"} />
    <Paragraph>large</Paragraph>
    <Button {...args} size={"large"} />
  </>
);

PredefinedSize.args = {
  text: "Button",
  size: "small",
};

export const CustomSize: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Button {...args} />
    <Paragraph>- Update padding</Paragraph>
    <Button {...args} padding={"20px 40px"} />
  </>
);

CustomSize.args = {
  text: "Button",
  padding: "7px",
};

export const textProperty: Story = (args) => (
  <>
    <Paragraph>- Update textWeight (predefined weight)</Paragraph>
    <Paragraph>normal (default)</Paragraph>
    <Button {...args} />
    <Paragraph>bold</Paragraph>
    <Button {...args} textWeight={"bold"} />
    <Paragraph>- Update textFontWeight (custom weight)</Paragraph>
    <Button {...args} textFontWeight={100} />
    <Paragraph>- Update textFontFamily</Paragraph>
    <Button {...args} textFontFamily={"Times New Roman"} />
    <Paragraph>- Update textFontSize</Paragraph>
    <Button {...args} textFontSize={"20px"} />
  </>
);

textProperty.args = {
  text: "Button",
};
