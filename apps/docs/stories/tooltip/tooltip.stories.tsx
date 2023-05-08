import React from "react";
import { Tooltip } from "puls-next/src";

import type { Meta, StoryObj } from "@storybook/react";
import { TooltipDemo } from "./tooltip";

const meta: Meta<typeof Tooltip> = {
  component: TooltipDemo,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
