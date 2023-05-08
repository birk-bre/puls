import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/utils";

const tagVariants = cva(
  "inline-flex items-center px-1.5 py-0.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-neutral-30 text-neutral-90",
        success: "bg-success-light",
        attention: "bg-attention-light",
        information: "bg-information-light",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ className, variant, ...props }: TagProps) {
  return <div className={cn(tagVariants({ variant }), className)} {...props} />;
}

export { Tag, tagVariants };
