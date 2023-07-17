import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Tag",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const PredefinedType: Story = (args) => (
  <>
    <p>- Update type</p>
    <p>default</p>
    <Tag {...args} />
    <p>success</p>
    <Tag {...args} text={"Success"} type={"success"} />
    <p>alert</p>
    <Tag {...args} text={"Alert"} type={"alert"} />
    <p>error</p>
    <Tag {...args} text={"Error"} type={"error"} />
  </>
);

PredefinedType.args = {
  text: "Default",
};

export const Color: Story = (args) => (
  <>
    <p>- Default</p>
    <Tag {...args} />
    <p>- Update backgroundColor</p>
    <Tag {...args} backgroundColor={"#89cff0"} />
    <p>- Update textColor</p>
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
    <p>- Update format</p>
    <p>default</p>
    <Tag {...args} />
    <p>semiRounded</p>
    <Tag {...args} format={"semiRounded"} />
    <p>rounded</p>
    <Tag {...args} format={"rounded"} />
  </>
);

PredefinedFormat.args = {
  text: "Tag",
  format: "default",
};

export const CustomFormat: Story = (args) => (
  <>
    <p>- Default</p>
    <Tag {...args} />
    <p>- Update borderRadius</p>
    <Tag {...args} borderRadius={"15px 2px"} />
  </>
);

CustomFormat.args = {
  text: "Tag",
  borderRadius: "0px",
};

export const PredefinedSize: Story = (args) => (
  <>
    <p>- Update size</p>
    <p>small (default)</p>
    <Tag {...args} />
    <p>medium</p>
    <Tag {...args} size={"medium"} />
    <p>large</p>
    <Tag {...args} size={"large"} />
  </>
);

PredefinedSize.args = {
  text: "Tag",
  size: "small",
};

export const CustomSize: Story = (args) => (
  <>
    <p>- Default</p>
    <Tag {...args} />
    <p>-Update padding</p>
    <Tag {...args} padding={"20px 10px"} />
  </>
);

CustomSize.args = {
  text: "Tag",
  padding: "7px",
};

export const textProperty: Story = (args) => (
  <>
    <p>- Update textWeight (predefined weight)</p>
    <p>normal (default)</p>
    <Tag {...args} />
    <p>bold</p>
    <Tag {...args} textWeight={"bold"} />
    <p>- Update textFontWeight (custom weight)</p>
    <Tag {...args} textFontWeight={100} />
    <p>- Update textFontFamily</p>
    <Tag {...args} textFontFamily={"Times New Roman"} />
    <p>- Update textFontSize</p>
    <Tag {...args} textFontSize={"20px"} />
  </>
);

textProperty.args = {
  text: "Tag",
};
