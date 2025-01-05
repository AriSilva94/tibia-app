import * as React from "react";
import { cn } from "@/lib/utils";
import {
  baseStyles,
  primaryStyles,
  secondaryStyles,
} from "@/components/ui/buttons/buttonStyles";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  }
>(({ variant = "primary", className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      baseStyles,
      variant === "primary" ? primaryStyles : secondaryStyles,
      className
    )}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = "Button";
export { Button };
