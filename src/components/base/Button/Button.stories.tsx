import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = (args) => (
  <>
    <p>Active</p>
    <Button {...args} />
    <p>Disabled</p>
    <Button {...args} disabled={true} />
  </>
);

Default.args = {
  text: "Button",
};

export const CustomColor: Story = (args) => (
  <>
    <p>Active</p>
    <Button {...args} />
    <p>Disabled</p>
    <Button {...args} disabled={true} />
  </>
);

CustomColor.args = {
  text: "Button",
  backgroundColor: "#EE4B2B",
  textColor: "#fff",
  hoverColor: "#D22B2B"
};

export const PredefinedFormats: Story = (args) => (
  <>
    <p>Default</p>
    <Button {...args} />
    <p>Semi rounded</p>
    <Button {...args} format={"semiRounded"} />
    <p>Rounded</p>
    <Button {...args} format={"rounded"} />
  </>
);

PredefinedFormats.args = {
  text: "Button",
  format: "default"
};

export const CustomFormats: Story = (args) => (
  <>
    <p>border-radius: 2px</p>
    <Button {...args} />
    <p>border-radius: 15px 2px</p>
    <Button {...args} borderRadius={"15px 2px"} />
  </>
);

CustomFormats.args = {
  text: "Button",
  borderRadius: "2px"
};

export const PredefinedSizes: Story = (args) => (
  <>
    <p>Small</p>
    <Button {...args} />
    <p>Medium</p>
    <Button {...args} size={"medium"} />
    <p>Large</p>
    <Button {...args} size={"large"} />
  </>
);

PredefinedSizes.args = {
  text: "Button",
  size: "small"
};

export const CustomSizes: Story = (args) => (
  <>
    <p>padding: 10px</p>
    <Button {...args}/>
    <p>padding: 20px 10px</p>
    <Button {...args} padding={"20px 10px"} />
  </>
);

CustomSizes.args = {
  text: "Button",
  padding: "10px"
};
