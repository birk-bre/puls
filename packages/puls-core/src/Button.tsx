import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="ui-bg-blue-500 ui-p-4">{props.children}</button>;
}

Button.displayName = "Button";
