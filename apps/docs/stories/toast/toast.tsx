"use client";
import React from "react";
import { Button } from "puls-next/src/button";
import { ToastAction } from "puls-next/src";
import { useToast } from "puls-next/src";

export function ToastDemo(variant: "default" | "success" | "error") {
  const { toast } = useToast();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        toast({
          // @ts-ignore
          variant: variant.variant,
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
    >
      Add to calendar
    </Button>
  );
}
