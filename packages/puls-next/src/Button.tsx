import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[40px]",
  {
    variants: {
      variant: {
        primary:
          "text-white hover:bg-primary-60 active:bg-primary-90 bg-primary-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-information-dark focus-visible:ring-offset-2",
        secondary:
          "bg-white text-black border hover:text-white border-primary-40 hover:bg-primary-60 active:bg-primary-90 disabled:bg-neutral-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-information-dark focus-visible:ring-offset-2",
        ghost:
          "border border-input hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        xl: "h-16 py-5 px-12 text-3xl font-medium",
        sm: "h-8 px-5 py-1 text-base font-medium",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "xl",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
