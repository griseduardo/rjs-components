import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";
import Paragraph from "../Paragraph/Paragraph";
import Text from "../Text/Text";
import Div from "../Div/Div";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Tag",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const PredefinedType: Story = (args) => (
  <>
    <Text>- Update type</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>default</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>success</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} text={"Success"} type={"success"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>alert</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} text={"Alert"} type={"alert"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>error</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} text={"Error"} type={"error"} />
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedType.args = {
  text: "Default",
};

export const Color: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Tag {...args} />
    </Div>
    <Paragraph>- Update backgroundColor</Paragraph>
    <Div margin="0 10px">
      <Tag {...args} backgroundColor={"#89cff0"} />
    </Div>
    <Paragraph>- Update textColor</Paragraph>
    <Div margin="0 10px">
      <Tag {...args} backgroundColor={"#89cff0"} textColor={"#0047ab"} />
    </Div>
  </>
);

Color.args = {
  text: "Tag",
  backgroundColor: "#d3d3d3",
  textColor: "#fff",
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
          <Tag {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>semiRounded</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} format={"semiRounded"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>rounded</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} format={"rounded"} />
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedFormat.args = {
  text: "Tag",
  format: "default",
};

export const CustomFormat: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Tag {...args} />
    </Div>
    <Paragraph>- Update borderRadius</Paragraph>
    <Div margin="0 10px">
      <Tag {...args} borderRadius={"15px 2px"} />
    </Div>
  </>
);

CustomFormat.args = {
  text: "Tag",
  borderRadius: "0px",
};

export const PredefinedSize: Story = (args) => (
  <>
    <Text>- Update size</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>small (default)</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>medium</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} size={"medium"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>large</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} size={"large"} />
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedSize.args = {
  text: "Tag",
  size: "small",
};

export const CustomSize: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Tag {...args} />
    </Div>
    <Paragraph>-Update padding</Paragraph>
    <Div margin="0 10px">
      <Tag {...args} padding={"20px 10px"} />
    </Div>
  </>
);

CustomSize.args = {
  text: "Tag",
  padding: "7px",
};

export const textProperty: Story = (args) => (
  <>
    <Text>- Update textWeight (predefined weight)</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>normal (default)</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>bold</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Tag {...args} textWeight={"bold"} />
        </Div>
      </Div>
    </Div>
    <Paragraph>- Update textFontWeight (custom weight)</Paragraph>
    <Div margin="0 10px">
      <Tag {...args} textFontWeight={100} />
    </Div>
    <Paragraph>- Update textFontFamily</Paragraph>
    <Div margin="0 10px">
      <Tag {...args} textFontFamily={"Times New Roman"} />
    </Div>
    <Paragraph>- Update textFontSize</Paragraph>
    <Div margin="0 10px">
      <Tag {...args} textFontSize={"20px"} />
    </Div>
  </>
);

textProperty.args = {
  text: "Tag",
};
