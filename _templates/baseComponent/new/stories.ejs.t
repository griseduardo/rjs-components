---
to: src/components/base/<%=name%>/<%=name%>.stories.tsx
---
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import <%=name%> from "./<%=name%>";
import StorybookContainer from "../StorybookContainer/StorybookContainer";

const meta: Meta<typeof <%=name%>> = {
  component: <%=name%>,
  title: "<%=name%>",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof <%=name%>>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <StorybookContainer>
      <<%=name%> {...args} />
    </StorybookContainer>
  ),
};
