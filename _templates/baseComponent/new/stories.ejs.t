---
to: src/components/base/<%=name%>/<%=name%>.stories.tsx
---
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import <%=name%> from "./<%=name%>";
import Paragraph from "../Paragraph/Paragraph";
import Text from "../Text/Text";
import Div from "../Div/Div";

const meta: Meta<typeof <%=name%>> = {
  component: <%=name%>,
  title: "<%=name%>",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof <%=name%>>;

export const : Story = (args) => (
  <>
    <Text>- </Text>
    <Div alignContent="center" margin="0 0 20px 0">
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph></Paragraph>
        </Div>
        <Div justifyContent="center">
          <<%=name%> {...args} />
        </Div>
      </Div>
      <Div margin="0 10px">
        <Div justifyContent="center">
          <Paragraph></Paragraph>
        </Div>
        <Div justifyContent="center">
          <<%=name%> {...args} />
        </Div>
      </Div>
    </Div>
  </>
);

.args = {
};

export const : Story = (args) => (
  <>
    <Text>- </Text>
    <Div margin="16px 10px 0 10px">
      <<%=name%> {...args} />
    </Div>
    <Paragraph>- </Paragraph>
    <Div margin="0 10px">
      <<%=name%> {...args} />
    </Div>
  </>
);

.args = {
};
