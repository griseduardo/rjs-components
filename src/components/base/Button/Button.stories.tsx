import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import Text from "../Text/Text";
import Paragraph from "../Paragraph/Paragraph";
import Div from "../Div/Div";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Color: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>Active</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Button {...args} />
        </Div>
      </Div>
      <Div>
        <Paragraph>Disabled</Paragraph>
        <Button {...args} disabled={true} />
      </Div>
    </Div>
    <Text>- Update backgroundColor and hoverColor</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>Active</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Button
            {...args}
            backgroundColor={"#ee4b2b"}
            hoverColor={"#d22b2b"}
          />
        </Div>
      </Div>
      <Div>
        <Paragraph>Disabled</Paragraph>
        <Button
          {...args}
          disabled={true}
          backgroundColor={"#ee4b2b"}
          hoverColor={"#d22b2b"}
        />
      </Div>
    </Div>
    <Text>- Update textColor</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>Active</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Button
            {...args}
            backgroundColor={"#ee4b2b"}
            hoverColor={"#d22b2b"}
            textColor={"#fff"}
          />
        </Div>
      </Div>
      <Div>
        <Div justifyContent="center">
          <Paragraph>Disabled</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Button
            {...args}
            disabled={true}
            backgroundColor={"#ee4b2b"}
            hoverColor={"#d22b2b"}
            textColor={"#fff"}
          />
        </Div>
      </Div>
    </Div>
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
    <Text>- Update format</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>default</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Button {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>semiRounded</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Button {...args} format={"semiRounded"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>rounded</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Button {...args} format={"rounded"} />
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedFormat.args = {
  text: "Button",
  format: "default",
};

export const CustomFormat: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Button {...args} />
    </Div>
    <Paragraph>- Update borderRadius</Paragraph>
    <Div margin="0 10px">
      <Button {...args} borderRadius={"15px 2px"} />
    </Div>
  </>
);

CustomFormat.args = {
  text: "Button",
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
          <Button {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>medium</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Button {...args} size={"medium"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>large</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Button {...args} size={"large"} />
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedSize.args = {
  text: "Button",
  size: "small",
};

export const CustomSize: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <Button {...args} />
    </Div>
    <Paragraph>- Update padding</Paragraph>
    <Div margin="0 10px">
      <Button {...args} padding={"20px 40px"} />
    </Div>
  </>
);

CustomSize.args = {
  text: "Button",
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
          <Button {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>bold</Paragraph>
        </Div>
        <Div justifyContent="center">
          <Button {...args} textWeight={"bold"} />
        </Div>
      </Div>
    </Div>
    <Paragraph>- Update textFontWeight (custom weight)</Paragraph>
    <Div margin="0 10px">
      <Button {...args} textFontWeight={100} />
    </Div>
    <Paragraph>- Update textFontFamily</Paragraph>
    <Div margin="0 10px">
      <Button {...args} textFontFamily={"Times New Roman"} />
    </Div>
    <Paragraph>- Update textFontSize</Paragraph>
    <Div margin="0 10px">
      <Button {...args} textFontSize={"20px"} />
    </Div>
  </>
);

textProperty.args = {
  text: "Button",
};
