"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

interface SeparatorProps extends React.ComponentProps<
  typeof SeparatorPrimitive.Root
> {
  variant?: "thin" | "normal" | "thick";
  light?: boolean; // <-- new prop
}

function Separator({
  variant = "normal",
  light = false, // default to false
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  const thicknessClass =
    variant === "thin"
      ? ""
      : variant === "normal"
        ? "border border-[1px]"
        : "border border-[2px]";

  const colorClass = light ? "border-foreground-light" : "border-foreground";

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        colorClass,
        "shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        thicknessClass,
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
