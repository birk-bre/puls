import React from "react";
import { Input } from "puls-next/src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { type: "string" },
    required: { type: "boolean" },
    type: {
      options: ["text", "password", "email", "number", "tel", "url"],
      control: { type: "select" },
    },
    disabled: { type: "boolean" },
    minLength: { type: "number" },
    helperText: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
