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

export const Types: Story = (args) => (
  <>
    <p>Default</p>
    <Tag {...args} />
    <p>Success</p>
    <Tag {...args} text={"Success"} type={"success"} />
    <p>Alert</p>
    <Tag {...args} text={"Alert"} type={"alert"} />
    <p>Error</p>
    <Tag {...args} text={"Error"} type={"error"} />
  </>
);

Types.args = {
  text: "Default",
};

export const CustomColor: Story = (args) => (
  <>
    <p>Blue - textColor and backgroundColor</p>
    <Tag {...args} />
    <p>Purple</p>
    <Tag {...args} textColor={"#800080"} backgroundColor={"#e6e6fa"} />
  </>
);

CustomColor.args = {
  text: "Tag",
  backgroundColor: "#89cff0",
  textColor: "#0047ab",
};

export const PredefinedFormats: Story = (args) => (
  <>
    <p>Default</p>
    <Tag {...args} />
    <p>Semi rounded</p>
    <Tag {...args} format={"semiRounded"} />
    <p>Rounded</p>
    <Tag {...args} format={"rounded"} />
  </>
);

PredefinedFormats.args = {
  text: "Tag",
  format: "default",
};

export const CustomFormats: Story = (args) => (
  <>
    <p>borderRadius: 2px</p>
    <Tag {...args} />
    <p>borderRadius: 15px 2px</p>
    <Tag {...args} borderRadius={"15px 2px"} />
  </>
);

CustomFormats.args = {
  text: "Tag",
  borderRadius: "2px",
};

export const PredefinedSizes: Story = (args) => (
  <>
    <p>Small</p>
    <Tag {...args} />
    <p>Medium</p>
    <Tag {...args} size={"medium"} />
    <p>Large</p>
    <Tag {...args} size={"large"} />
  </>
);

PredefinedSizes.args = {
  text: "Tag",
  size: "small",
};

export const CustomSizes: Story = (args) => (
  <>
    <p>padding: 10px</p>
    <Tag {...args} />
    <p>padding: 20px 10px</p>
    <Tag {...args} padding={"20px 10px"} />
  </>
);

CustomSizes.args = {
  text: "Tag",
  padding: "10px",
};
