import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Img from "./Img";
import Paragraph from "../Paragraph/Paragraph";
import Div from "../Div/Div";
import Text from "../Text/Text";

const meta: Meta<typeof Img> = {
  component: Img,
  title: "Img",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Img>;

export const Height: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Img {...args} />
    </Div>
    <Paragraph>- Update height</Paragraph>
    <Div margin="0 10px">
      <Img {...args} height="200px" />
    </Div>
  </>
);

Height.args = {
  src: "/example.jpg",
};

export const Width: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Img {...args} />
    </Div>
    <Paragraph>- Update width</Paragraph>
    <Div margin="0 10px">
      <Img {...args} width="200px" />
    </Div>
  </>
);

Width.args = {
  src: "/example.jpg",
};

export const HeightAndWidth: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Img {...args} />
    </Div>
    <Paragraph>- Update height and width</Paragraph>
    <Div margin="0 10px">
      <Img {...args} height="200px" width="200px" />
    </Div>
  </>
);

HeightAndWidth.args = {
  src: "/example.jpg",
};

export const PredefinedFormat: Story = (args) => (
  <>
    <Text>- Update format</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>default</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Img {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>semiRounded</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Img {...args} format={"semiRounded"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>rounded</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Img {...args} format={"rounded"} />
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedFormat.args = {
  src: "/example.jpg",
  format: "default",
  height: "500px",
  width: "500px",
};

export const CustomFormat: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Img {...args} />
    </Div>
    <Paragraph>- Update borderRadius</Paragraph>
    <Div margin="0 10px">
      <Img {...args} borderRadius={"15px 2px"} />
    </Div>
  </>
);

CustomFormat.args = {
  src: "/example.jpg",
  borderRadius: "0px",
  height: "500px",
  width: "500px",
};
