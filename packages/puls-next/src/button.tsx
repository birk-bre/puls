import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[40px] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-information-dark focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "text-white hover:bg-primary-60 active:bg-primary-90 bg-primary-80 ",
        secondary:
          "bg-white text-black border hover:text-white border-primary-40 hover:bg-primary-60 active:bg-primary-90 disabled:bg-neutral-40 ",
        ghost: " hover:bg-primary-60 hover:text-white",
        icon: "border border-primary-40 rounded-full",
        iconNoBorder: "border-none rounded-full",
      },
      size: {
        xl: "h-16 py-5 px-12 text-3xl font-medium hover:bg-primary-60 active:bg-primary-90 disabled:bg-neutral-40",
        sm: "h-8 px-5 py-1 text-base font-medium hover:bg-primary-60 active:bg-primary-90 disabled:bg-neutral-40",
      },
    },
    compoundVariants: [
      {
        variant: ["icon", "iconNoBorder"],
        size: "xl",
        className: "h-9 w-9 p-2 text-base",
      },
    ],
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
