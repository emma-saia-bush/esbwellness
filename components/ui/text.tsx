import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      title: "text-4xl tracking-tight",
      smalltitle: "text-3xl tracking-tight",
      subtitle: "text-xl leading-tight",
      largebody: "text-lg leading-tight",
      body: "text-md pt-2 leading-tight",
      caption: "text-sm leading-tight",
    },
    font: {
      serif: "font-serif",
      sans: "font-sans",
    },
    fontStyle: {
      normal: "font-serif",
      italic: "italic",
    },
    colorStyle: {
      dark: "text-foreground",
      light: "text-foreground-light",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body",
    font: "sans",
    colorStyle: "dark",
    weight: "normal",
  },
});

export interface TextProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {}

export function Text({
  className,
  variant,
  font,
  fontStyle,
  colorStyle,
  weight,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        textVariants({ variant, font, colorStyle, fontStyle, weight }),
        className,
      )}
      {...props}
    />
  );
}
