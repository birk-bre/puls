import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { ToastDemo } from "./toast";
import { Toast, Toaster } from "puls-next/src";

const meta: Meta<typeof ToastDemo> = {
  component: ToastDemo,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    variant: "success",
  },
  argTypes: {
    variant: {
      options: ["success", "error", "default"],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Toaster />
        <Story />
      </div>
    ),
  ],
};
