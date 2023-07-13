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

export const PredefinedFormat: Story = (args) => (
  <>
    <p>Default:</p>
    <Button {...args} />
    <p>Semi rounded:</p>
    <Button {...args} format={"semiRounded"} />
    <p>Rounded:</p>
    <Button {...args} format={"rounded"} />
  </>
);

PredefinedFormat.args = {
  text: "Button",
  format: "default",
};

export const CustomFormat: Story = (args) => (
  <>
    <p>Default:</p>
    <Button {...args} />
    <p>borderRadius: 2px</p>
    <Button {...args} borderRadius={"2px"} />
    <p>borderRadius: 15px 2px</p>
    <Button {...args} borderRadius={"15px 2px"} />
  </>
);

CustomFormat.args = {
  text: "Button",
  borderRadius: "0px",
};

export const CustomColor: Story = (args) => (
  <>
    <p>Default:</p>
    <p>Active</p>
    <Button {...args} />
    <p>Disabled</p>
    <Button {...args} disabled={true} />
    <p>textColor: #fff / backgroundColor: #ee4b2b/ hoverColor: #d22b2b</p>
    <p>Active</p>
    <Button
      {...args}
      textColor={"#fff"}
      backgroundColor={"#ee4b2b"}
      hoverColor={"#d22b2b"}
    />
    <p>Disabled</p>
    <Button
      {...args}
      disabled={true}
      textColor={"#fff"}
      backgroundColor={"#ee4b2b"}
      hoverColor={"#d22b2b"}
    />
  </>
);

CustomColor.args = {
  text: "Button",
  backgroundColor: "#d3d3d3",
  textColor: "#000",
  hoverColor: "#a9a9a9",
};

export const PredefinedSize: Story = (args) => (
  <>
    <p>Default:</p>
    <Button {...args} />
    <p>Medium:</p>
    <Button {...args} size={"medium"} />
    <p>Large:</p>
    <Button {...args} size={"large"} />
  </>
);

PredefinedSize.args = {
  text: "Button",
  size: "small",
};

export const CustomSize: Story = (args) => (
  <>
    <p>Default:</p>
    <Button {...args} />
    <p>padding: 10px</p>
    <Button {...args} padding={"10px"} />
    <p>padding: 20px 10px</p>
    <Button {...args} padding={"20px 10px"} />
  </>
);

CustomSize.args = {
  text: "Button",
  padding: "7px",
};
