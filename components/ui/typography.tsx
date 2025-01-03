import * as React from "react";

import { cn } from "@/lib/utils";

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  }
>(({ className, as = "h1", ...props }, ref) => {
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={cn(
        {
          "text-3xl font-bold": as === "h1",
          "text-2xl font-semibold": as === "h2",
          "text-xl font-medium": as === "h3",
          "text-lg font-medium": as === "h4",
          "text-base font-medium": as === "h5",
          "text-sm font-medium": as === "h6",
          "text-base": as === "p",
        },
        className
      )}
      {...props}
    />
  );
});
Typography.displayName = "Typography";

export { Typography };
