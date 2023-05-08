import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "puls-next/src";

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "success", "attention", "information"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: (args) => <Tag {...args}>Tag</Tag>,
  args: {
    variant: "default",
  },
};
