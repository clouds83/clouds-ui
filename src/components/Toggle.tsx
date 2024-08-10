import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import cn from "@/utils/cn";

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
}

const containerSize = {
  sm: "w-7 p-1",
  md: "w-9 p-1",
  lg: "w-12 p-1.5",
};

const circleSize = {
  sm: "h-2.5 w-2.5 peer-checked:ml-2.5",
  md: "h-4 w-4 peer-checked:ml-3",
  lg: "h-5 w-5 peer-checked:ml-4",
};

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ size = "md", ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative flex h-fit shrink-0 rounded-full bg-gray-400 transition-colors duration-300",
          "has-[:checked]:bg-blue-400 has-[:disabled]:opacity-50",
          containerSize[size],
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          className="peer absolute inset-0 z-10 cursor-pointer opacity-0 disabled:cursor-not-allowed"
          {...props}
        />

        <div
          className={clsx(
            "h-4 w-4 appearance-none rounded-full bg-gray-100 checked:bg-white",
            "ml-0 transition-[margin] duration-300",
            circleSize[size],
          )}
        ></div>
      </div>
    );
  },
);

Toggle.displayName = "Toggle";

export default Toggle;
