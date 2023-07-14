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

export const Color: Story = (args) => (
  <>
    <p>- Default</p>
    <p>Active</p>
    <Button {...args} />
    <p>Disabled</p>
    <Button {...args} disabled={true} />
    <p>- Update backgroundColor and hoverColor</p>
    <p>Active</p>
    <Button {...args} backgroundColor={"#ee4b2b"} hoverColor={"#d22b2b"} />
    <p>Disabled</p>
    <Button
      {...args}
      disabled={true}
      backgroundColor={"#ee4b2b"}
      hoverColor={"#d22b2b"}
    />
    <p>- Update textColor</p>
    <p>Active</p>
    <Button
      {...args}
      backgroundColor={"#ee4b2b"}
      hoverColor={"#d22b2b"}
      textColor={"#fff"}
    />
    <p>Disabled</p>
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
    <p>- Update format</p>
    <p>small (default)</p>
    <Button {...args} />
    <p>semiRounded</p>
    <Button {...args} format={"semiRounded"} />
    <p>rounded</p>
    <Button {...args} format={"rounded"} />
  </>
);

PredefinedFormat.args = {
  text: "Button",
  format: "default",
};

export const CustomFormat: Story = (args) => (
  <>
    <p>- Default</p>
    <Button {...args} />
    <p>- Update borderRadius</p>
    <Button {...args} borderRadius={"15px 2px"} />
  </>
);

CustomFormat.args = {
  text: "Button",
  borderRadius: "0px",
};

export const PredefinedSize: Story = (args) => (
  <>
    <p>- Update size</p>
    <p>small (default)</p>
    <Button {...args} />
    <p>medium</p>
    <Button {...args} size={"medium"} />
    <p>large</p>
    <Button {...args} size={"large"} />
  </>
);

PredefinedSize.args = {
  text: "Button",
  size: "small",
};

export const CustomSize: Story = (args) => (
  <>
    <p>- Default</p>
    <Button {...args} />
    <p>- Update padding</p>
    <Button {...args} padding={"20px 40px"} />
  </>
);

CustomSize.args = {
  text: "Button",
  padding: "7px",
};

export const textProperty: Story = (args) => (
  <>
    <p>- Update textWeight (predefined weight)</p>
    <p>normal (default)</p>
    <Button {...args} />
    <p>bold</p>
    <Button {...args} textWeight={"bold"} />
    <p>- Update textFontWeight (custom weight)</p>
    <Button {...args} textFontWeight={100} />
    <p>- Update textFontFamily</p>
    <Button {...args} textFontFamily={"Times New Roman"} />
    <p>- Update textFontSize</p>
    <Button {...args} textFontSize={"20px"} />
  </>
);

textProperty.args = {
  text: "Button",
};
