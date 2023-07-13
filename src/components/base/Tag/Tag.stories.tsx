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
    <p>Default:</p>
    <Tag {...args} />
    <p>Success:</p>
    <Tag {...args} text={"Success"} type={"success"} />
    <p>Alert:</p>
    <Tag {...args} text={"Alert"} type={"alert"} />
    <p>Error:</p>
    <Tag {...args} text={"Error"} type={"error"} />
  </>
);

PredefinedType.args = {
  text: "Default",
};

export const CustomColor: Story = (args) => (
  <>
    <p>Default:</p>
    <Tag {...args} />
    <p>textColor: #0047ab / backgroundColor: #89cff0</p>
    <Tag {...args} textColor={"#0047ab"} backgroundColor={"#89cff0"} />
    <p>textColor: #800080 / backgroundColor: #e6e6fa</p>
    <Tag {...args} textColor={"#800080"} backgroundColor={"#e6e6fa"} />
  </>
);

CustomColor.args = {
  text: "Tag",
  backgroundColor: "#d3d3d3",
  textColor: "#fff",
};

export const PredefinedFormat: Story = (args) => (
  <>
    <p>Default:</p>
    <Tag {...args} />
    <p>Semi rounded:</p>
    <Tag {...args} format={"semiRounded"} />
    <p>Rounded:</p>
    <Tag {...args} format={"rounded"} />
  </>
);

PredefinedFormat.args = {
  text: "Tag",
  format: "default",
};

export const CustomFormat: Story = (args) => (
  <>
    <p>Default:</p>
    <Tag {...args} />
    <p>borderRadius: 2px</p>
    <Tag {...args} borderRadius={"2px"} />
    <p>borderRadius: 15px 2px</p>
    <Tag {...args} borderRadius={"15px 2px"} />
  </>
);

CustomFormat.args = {
  text: "Tag",
  borderRadius: "0px",
};

export const PredefinedSize: Story = (args) => (
  <>
    <p>Default:</p>
    <Tag {...args} />
    <p>Medium:</p>
    <Tag {...args} size={"medium"} />
    <p>Large:</p>
    <Tag {...args} size={"large"} />
  </>
);

PredefinedSize.args = {
  text: "Tag",
  size: "small",
};

export const CustomSize: Story = (args) => (
  <>
    <p>Default:</p>
    <Tag {...args} />
    <p>padding: 10px</p>
    <Tag {...args} padding={"10px"} />
    <p>padding: 20px 10px</p>
    <Tag {...args} padding={"20px 10px"} />
  </>
);

CustomSize.args = {
  text: "Tag",
  padding: "7px",
};
