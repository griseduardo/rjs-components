import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="white"
    width="20"
    height="20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
    />
  </svg>
);

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

export const WithIcon: Story = {
  args: {
    icon: icon,
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

export const IconPlacement: Story = {
  args: {
    icon: icon,
  },
  render: (args) => (
    <StorybookContainer>
      <Button {...args} iconPlacement="left" />
      <Button {...args} iconPlacement="right" />
    </StorybookContainer>
  ),
};

export const IconSpacing: Story = {
  args: {
    icon: icon,
  },
  render: (args) => (
    <StorybookContainer>
      <Button {...args} />
      <Button {...args} spacing="20px" />
    </StorybookContainer>
  ),
};
