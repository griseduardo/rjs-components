import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import Tag from "./Tag";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof Tag> = {
  title: "Tag",
  component: Tag,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tag>;

const icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="white"
    width="15px"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6h.008v.008H6V6Z"
    />
  </svg>
);

export const Default: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
    </StorybookContainer>
  ),
};

export const PredefinedType: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} type="success" />
      <Tag {...args} type="alert" />
      <Tag {...args} type="error" />
    </StorybookContainer>
  ),
};

export const PredefinedFormat: Story = {
  args: {
    format: "square",
  },
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} format="semiRounded" />
      <Tag {...args} format="rounded" />
    </StorybookContainer>
  ),
};

export const PredefinedSize: Story = {
  args: {
    size: "small",
  },
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} size="medium" />
      <Tag {...args} size="large" />
    </StorybookContainer>
  ),
};

export const BackgroundColor: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} backgroundColor="#3b82f6" />
    </StorybookContainer>
  ),
};

export const Border: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} border="1px solid #166534" />
    </StorybookContainer>
  ),
};

export const CustomFormat: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} borderRadius="15px 2px" />
    </StorybookContainer>
  ),
};

export const CustomSize: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} padding="20px 40px" />
    </StorybookContainer>
  ),
};

export const TextFontWeight: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} textFontWeight={100} />
    </StorybookContainer>
  ),
};

export const TextFontFamily: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} textFontFamily="Arial" />
    </StorybookContainer>
  ),
};

export const TextFontSize: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} textFontSize="20px" />
    </StorybookContainer>
  ),
};

export const TextColor: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} textColor="#000" />
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
      <Tag {...args} />
      <Tag {...args} size="medium" />
      <Tag {...args} size="large" />
    </StorybookContainer>
  ),
};

export const IconPlacement: Story = {
  args: {
    icon: icon,
  },
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} iconPlacement="left" />
      <Tag {...args} iconPlacement="right" />
    </StorybookContainer>
  ),
};

export const IconSpacing: Story = {
  args: {
    icon: icon,
  },
  render: (args) => (
    <StorybookContainer>
      <Tag {...args} />
      <Tag {...args} spacing="20px" />
    </StorybookContainer>
  ),
};
