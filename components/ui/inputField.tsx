import * as React from "react";

import { cn } from "@/lib/utils";

const InputField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
  }
>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={props.id}
        className={cn("block text-sm font-semibold text-gray-700", className)}
      >
        {label}
      </label>
      <input
        ref={ref}
        className={cn(
          "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
});

InputField.displayName = "InputField";
export { InputField };
