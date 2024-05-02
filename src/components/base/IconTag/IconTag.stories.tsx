import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import IconTag from "./IconTag";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof IconTag> = {
  component: IconTag,
  title: "IconTag",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof IconTag>;

export const IconPlacement: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} text="IconTag" iconPlacement="left" />
    <IconTag {...args} text="IconTag" iconPlacement="right" />
  </StorybookContainer>
);

IconPlacement.args = {
  src: "/example.jpg",
};

export const PredefinedType: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} text="Success" type="success" />
    <IconTag {...args} text="Alert" type="alert" />
    <IconTag {...args} text="Error" type="error" />
  </StorybookContainer>
);

PredefinedType.args = {
  text: "Default",
  src: "/example.jpg",
};

export const PredefinedFormat: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} format="semiRounded" />
    <IconTag {...args} format="rounded" />
  </StorybookContainer>
);

PredefinedFormat.args = {
  text: "IconTag",
  format: "default",
  src: "/example.jpg",
};

export const PredefinedSize: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} size="medium" />
    <IconTag {...args} size="large" />
  </StorybookContainer>
);

PredefinedSize.args = {
  text: "IconTag",
  size: "small",
  src: "/example.jpg",
};

export const PredefinedIconFormat: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} iconFormat="semiRounded" />
    <IconTag {...args} iconFormat="rounded" />
  </StorybookContainer>
);

PredefinedIconFormat.args = {
  text: "IconTag",
  src: "/example.jpg",
  format: "default",
};

export const Color: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} backgroundColor="#89cff0" />
    <IconTag {...args} backgroundColor="#89cff0" textColor="#0047ab" />
  </StorybookContainer>
);

Color.args = {
  text: "IconTag",
  backgroundColor: "#d3d3d3",
  textColor: "#fff",
  src: "/example.jpg",
};

export const CustomFormat: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} borderRadius="15px 2px" />
  </StorybookContainer>
);

CustomFormat.args = {
  text: "IconTag",
  borderRadius: "0",
  src: "/example.jpg",
};

export const CustomSize: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} padding="20px 10px" />
  </StorybookContainer>
);

CustomSize.args = {
  text: "IconTag",
  padding: "7px",
  src: "/example.jpg",
};

export const TextProperty: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} textWeight="bold" />
    <IconTag {...args} textFontWeight={100} />
    <IconTag {...args} textFontFamily="Times New Roman" />
    <IconTag {...args} textFontSize="20px" />
  </StorybookContainer>
);

TextProperty.args = {
  text: "IconTag",
  src: "/example.jpg",
};

export const IconHeight: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} iconHeight="20px" />
  </StorybookContainer>
);

IconHeight.args = {
  text: "IconTag",
  src: "/example.jpg",
};

export const IconWidth: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} iconWidth="20px" />
  </StorybookContainer>
);

IconWidth.args = {
  text: "IconTag",
  src: "/example.jpg",
};

export const IconHeightAndWidth: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} iconHeight="20px" iconWidth="20px" />
  </StorybookContainer>
);

IconHeightAndWidth.args = {
  text: "IconTag",
  src: "/example.jpg",
};

export const CustomIconFormat: Story = (args) => (
  <StorybookContainer>
    <IconTag {...args} />
    <IconTag {...args} iconBorderRadius="15px 2px" />
  </StorybookContainer>
);

CustomIconFormat.args = {
  text: "IconTag",
  src: "/example.jpg",
  borderRadius: "0",
};
