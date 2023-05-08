import * as React from "react";
import { cn } from "../utils/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, helperText, ...props }, ref) => {
    const id = React.useId();
    return (
      <div className="relative z-0">
        <input
          id={id}
          type={type}
          className={cn(
            "block py-3.5 invalid:border-error-dark disabled:border-neutral-40 required:placeholder-shown:border-mandatory-dark px-2 w-full text-sm text-gray-900 bg-transparent border rounded-sm border-neutral-40 appearance-none focus:outline-none focus:ring-0 focus:border-primary-60 peer hover:border-neutral-80 disabled:bg-neutral-20 disabled:text-neutral-60",
            className
          )}
          ref={ref}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={id}
          className="px-2 absolute text-sm text-neutral-50 peer-invalid:text-error-dark peer-required:after:content-['*'] peer-required:after:text-mandatory-dark duration-300 transform -translate-y-3 scale-75 top-3.5 origin-[0] peer-focus:left-0 peer-focus:text-primary-60 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 "
        >
          {placeholder}
        </label>
        {helperText ? (
          <p className="text-sm text-neutral-60 pl-2 pt-1 peer-invalid:text-error-dark font-normal">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
