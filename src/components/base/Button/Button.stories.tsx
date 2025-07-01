import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
    </StorybookContainer>
  ),
};

export const PredefinedType: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} type="secondary" />
    </StorybookContainer>
  ),
};

export const PredefinedFormat: Story = {
  args: {
    format: "square",
  },
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} format="semiRounded" />
      <Button {...args} format="rounded" />
    </StorybookContainer>
  ),
};

export const PredefinedSize: Story = {
  args: {
    size: "small",
  },
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} size="medium" />
      <Button {...args} size="large" />
    </StorybookContainer>
  ),
};

export const BackgroundColor: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} backgroundColor="#3b82f6" />
    </StorybookContainer>
  ),
};

export const HoverColor: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} hoverColor="#166534" />
    </StorybookContainer>
  ),
};

export const FocusAndActiveColor: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} focusColor="#166534" activeColor="#14532d" />
    </StorybookContainer>
  ),
};

export const Border: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} border="1px solid #166534" />
    </StorybookContainer>
  ),
};

export const HoverBorder: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} hoverBorder="1px solid #166534" />
    </StorybookContainer>
  ),
};

export const FocusAndActiveBorder: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button
        {...args}
        focusBorder="1px solid #166534"
        activeBorder="2px solid #166534"
      />
    </StorybookContainer>
  ),
};

export const DisabledOpacity: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} disabledOpacity={0.2} />
    </StorybookContainer>
  ),
};

export const CustomFormat: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} borderRadius="15px 2px" />
    </StorybookContainer>
  ),
};

export const CustomSize: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} padding="20px 40px" />
    </StorybookContainer>
  ),
};

export const TextFontWeight: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} textFontWeight={100} />
    </StorybookContainer>
  ),
};

export const TextFontFamily: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} textFontFamily="Times New Roman" />
    </StorybookContainer>
  ),
};

export const TextFontSize: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} textFontSize="20px" />
    </StorybookContainer>
  ),
};

export const TextColor: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} textColor="#000" />
    </StorybookContainer>
  ),
};
