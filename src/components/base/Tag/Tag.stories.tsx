import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";
import Paragraph from "../Paragraph/Paragraph";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Tag",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const PredefinedType: Story = (args) => (
  <>
    <Paragraph>- Update type</Paragraph>
    <Paragraph>default</Paragraph>
    <Tag {...args} />
    <Paragraph>success</Paragraph>
    <Tag {...args} text={"Success"} type={"success"} />
    <Paragraph>alert</Paragraph>
    <Tag {...args} text={"Alert"} type={"alert"} />
    <Paragraph>error</Paragraph>
    <Tag {...args} text={"Error"} type={"error"} />
  </>
);

PredefinedType.args = {
  text: "Default",
};

export const Color: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Tag {...args} />
    <Paragraph>- Update backgroundColor</Paragraph>
    <Tag {...args} backgroundColor={"#89cff0"} />
    <Paragraph>- Update textColor</Paragraph>
    <Tag {...args} backgroundColor={"#89cff0"} textColor={"#0047ab"} />
  </>
);

Color.args = {
  text: "Tag",
  backgroundColor: "#d3d3d3",
  textColor: "#fff",
};

export const PredefinedFormat: Story = (args) => (
  <>
    <Paragraph>- Update format</Paragraph>
    <Paragraph>default</Paragraph>
    <Tag {...args} />
    <Paragraph>semiRounded</Paragraph>
    <Tag {...args} format={"semiRounded"} />
    <Paragraph>rounded</Paragraph>
    <Tag {...args} format={"rounded"} />
  </>
);

PredefinedFormat.args = {
  text: "Tag",
  format: "default",
};

export const CustomFormat: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Tag {...args} />
    <Paragraph>- Update borderRadius</Paragraph>
    <Tag {...args} borderRadius={"15px 2px"} />
  </>
);

CustomFormat.args = {
  text: "Tag",
  borderRadius: "0px",
};

export const PredefinedSize: Story = (args) => (
  <>
    <Paragraph>- Update size</Paragraph>
    <Paragraph>small (default)</Paragraph>
    <Tag {...args} />
    <Paragraph>medium</Paragraph>
    <Tag {...args} size={"medium"} />
    <Paragraph>large</Paragraph>
    <Tag {...args} size={"large"} />
  </>
);

PredefinedSize.args = {
  text: "Tag",
  size: "small",
};

export const CustomSize: Story = (args) => (
  <>
    <Paragraph>- Default</Paragraph>
    <Tag {...args} />
    <Paragraph>-Update padding</Paragraph>
    <Tag {...args} padding={"20px 10px"} />
  </>
);

CustomSize.args = {
  text: "Tag",
  padding: "7px",
};

export const textProperty: Story = (args) => (
  <>
    <Paragraph>- Update textWeight (predefined weight)</Paragraph>
    <Paragraph>normal (default)</Paragraph>
    <Tag {...args} />
    <Paragraph>bold</Paragraph>
    <Tag {...args} textWeight={"bold"} />
    <Paragraph>- Update textFontWeight (custom weight)</Paragraph>
    <Tag {...args} textFontWeight={100} />
    <Paragraph>- Update textFontFamily</Paragraph>
    <Tag {...args} textFontFamily={"Times New Roman"} />
    <Paragraph>- Update textFontSize</Paragraph>
    <Tag {...args} textFontSize={"20px"} />
  </>
);

textProperty.args = {
  text: "Tag",
};
