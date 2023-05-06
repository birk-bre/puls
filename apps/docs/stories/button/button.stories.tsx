import React from "react";
import { Button } from "puls-next/src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "ghost", "icon", "iconNoBorder"],
      control: { type: "select" },
    },
    size: {
      options: ["xl", "sm"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "primary",
    size: "xl",
  },
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "secondary",
  },
};

export const Icon: Story = {
  render: (args) => <Button {...args}>:D</Button>,
  args: {
    variant: "icon",
    size: "xl",
  },
};
