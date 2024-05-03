import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Tag",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const PredefinedType: Story = (args) => (
  <StorybookContainer>
    <Tag {...args} />
    <Tag {...args} text="Success" type="success" />
    <Tag {...args} text="Alert" type="alert" />
    <Tag {...args} text="Error" type="error" />
  </StorybookContainer>
);

PredefinedType.args = {
  text: "Default",
};

export const PredefinedFormat: Story = (args) => (
  <StorybookContainer>
    <Tag {...args} />
    <Tag {...args} format="semiRounded" />
    <Tag {...args} format="rounded" />
  </StorybookContainer>
);

PredefinedFormat.args = {
  text: "Tag",
  format: "default",
};

export const PredefinedSize: Story = (args) => (
  <StorybookContainer>
    <Tag {...args} />
    <Tag {...args} size="medium" />
    <Tag {...args} size="large" />
  </StorybookContainer>
);

PredefinedSize.args = {
  text: "Tag",
  size: "small",
};

export const Color: Story = (args) => (
  <StorybookContainer>
    <Tag {...args} />
    <Tag {...args} backgroundColor="#89cff0" />
    <Tag {...args} backgroundColor="#89cff0" textColor="#0047ab" />
  </StorybookContainer>
);

Color.args = {
  text: "Tag",
  backgroundColor: "#d3d3d3",
  textColor: "#fff",
};

export const CustomFormat: Story = (args) => (
  <StorybookContainer>
    <Tag {...args} />
    <Tag {...args} borderRadius="15px 2px" />
  </StorybookContainer>
);

CustomFormat.args = {
  text: "Tag",
  borderRadius: "0",
};

export const CustomSize: Story = (args) => (
  <StorybookContainer>
    <Tag {...args} />
    <Tag {...args} padding="20px 10px" />
  </StorybookContainer>
);

CustomSize.args = {
  text: "Tag",
  padding: "7px",
};

export const TextProperty: Story = (args) => (
  <StorybookContainer>
    <Tag {...args} />
    <Tag {...args} textWeight="bold" />
    <Tag {...args} textFontWeight={100} />
    <Tag {...args} textFontFamily="Times New Roman" />
    <Tag {...args} textFontSize="20px" />
  </StorybookContainer>
);

TextProperty.args = {
  text: "Tag",
};
