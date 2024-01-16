import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import IconTag from "./IconTag";
import Paragraph from "../Paragraph/Paragraph";
import Text from "../Text/Text";
import Div from "../Div/Div";

const meta: Meta<typeof IconTag> = {
  component: IconTag,
  title: "IconTag",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof IconTag>;

export const IconPlacement: Story = (args) => (
  <>
    <Text>- Update iconPlacement</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>left</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} text={"IconTag"} iconPlacement={"left"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>right</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} text={"IconTag"} iconPlacement={"right"} />
        </Div>
      </Div>
    </Div>
  </>
);

IconPlacement.args = {
  src: "/example.jpg",
};

export const PredefinedType: Story = (args) => (
  <>
    <Text>- Update type</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>default</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>success</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} text={"Success"} type={"success"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>alert</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} text={"Alert"} type={"alert"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>error</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} text={"Error"} type={"error"} />
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedType.args = {
  text: "Default",
  src: "/example.jpg",
};

export const Color: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <IconTag {...args} />
    </Div>
    <Paragraph>- Update backgroundColor</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} backgroundColor={"#89cff0"} />
    </Div>
    <Paragraph>- Update textColor</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} backgroundColor={"#89cff0"} textColor={"#0047ab"} />
    </Div>
  </>
);

Color.args = {
  text: "IconTag",
  backgroundColor: "#d3d3d3",
  textColor: "#fff",
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
          <IconTag {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>semiRounded</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} format={"semiRounded"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>rounded</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} format={"rounded"} />
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedFormat.args = {
  text: "IconTag",
  format: "default",
  src: "/example.jpg",
};

export const CustomFormat: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <IconTag {...args} />
    </Div>
    <Paragraph>- Update borderRadius</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} borderRadius={"15px 2px"} />
    </Div>
  </>
);

CustomFormat.args = {
  text: "IconTag",
  borderRadius: "0px",
  src: "/example.jpg",
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
          <IconTag {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>medium</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} size={"medium"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>large</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} size={"large"} />
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedSize.args = {
  text: "IconTag",
  size: "small",
  src: "/example.jpg",
};

export const CustomSize: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <IconTag {...args} />
    </Div>
    <Paragraph>-Update padding</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} padding={"20px 10px"} />
    </Div>
  </>
);

CustomSize.args = {
  text: "IconTag",
  padding: "7px",
  src: "/example.jpg",
};

export const TextProperty: Story = (args) => (
  <>
    <Text>- Update textWeight (predefined weight)</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>normal (default)</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>bold</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} textWeight={"bold"} />
        </Div>
      </Div>
    </Div>
    <Paragraph>- Update textFontWeight (custom weight)</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} textFontWeight={100} />
    </Div>
    <Paragraph>- Update textFontFamily</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} textFontFamily={"Times New Roman"} />
    </Div>
    <Paragraph>- Update textFontSize</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} textFontSize={"20px"} />
    </Div>
  </>
);

TextProperty.args = {
  text: "IconTag",
  src: "/example.jpg",
};

export const IconHeight: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <IconTag {...args} />
    </Div>
    <Paragraph>- Update iconHeight</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} iconHeight="20px" />
    </Div>
  </>
);

IconHeight.args = {
  text: "IconTag",
  src: "/example.jpg",
};

export const IconWidth: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <IconTag {...args} />
    </Div>
    <Paragraph>- Update iconWidth</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} iconWidth="20px" />
    </Div>
  </>
);

IconWidth.args = {
  text: "IconTag",
  src: "/example.jpg",
};

export const IconHeightAndWidth: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <IconTag {...args} />
    </Div>
    <Paragraph>- Update iconHeight and iconWidth</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} iconHeight="20px" iconWidth="20px" />
    </Div>
  </>
);

IconHeightAndWidth.args = {
  text: "IconTag",
  src: "/example.jpg",
};

export const PredefinedIconFormat: Story = (args) => (
  <>
    <Text>- Update iconFormat</Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>default</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>semiRounded</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} iconFormat={"semiRounded"} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph>rounded</Paragraph>
        </Div>
        <Div justifyContent="center">
          <IconTag {...args} iconFormat={"rounded"} />
        </Div>
      </Div>
    </Div>
  </>
);

PredefinedIconFormat.args = {
  text: "IconTag",
  src: "/example.jpg",
  format: "default",
};

export const CustomIconFormat: Story = (args) => (
  <>
    <Text>- Default</Text>
    <Div margin="16px 10px 0 10px">
      <IconTag {...args} />
    </Div>
    <Paragraph>- Update iconBorderRadius</Paragraph>
    <Div margin="0 10px">
      <IconTag {...args} iconBorderRadius={"15px 2px"} />
    </Div>
  </>
);

CustomIconFormat.args = {
  text: "IconTag",
  src: "/example.jpg",
  borderRadius: "0px",
};
