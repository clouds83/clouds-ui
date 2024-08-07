import { InputHTMLAttributes, forwardRef } from "react";
import cn from "~/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  roundness?:
    | "rounded-none"
    | "rounded-sm"
    | "rounded"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-2xl"
    | "rounded-full";
  IconLeft?: JSX.ElementType;
  IconRight?: JSX.ElementType;
  iconLeftClasses?: string;
  iconRightClasses?: string;
  className?: string;
}

// TODO: here

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      roundness,
      IconLeft,
      IconRight,
      className,
      iconLeftClasses,
      iconRightClasses,
      ...props
    },
    ref,
  ) => {
    const defaultClasses =
      "flex h-10 w-full bg-white rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-black";

    if (IconLeft || IconRight) {
      return (
        <div
          className={cn(
            "relative flex items-center rounded-md bg-white",
            roundness,
          )}
        >
          <input
            className={cn(
              defaultClasses,
              "z-10 bg-transparent",
              roundness,
              {
                "pl-9": IconLeft,
                "pr-9": IconRight,
              },
              className,
            )}
            ref={ref}
            {...props}
          />
          {IconLeft && (
            <IconLeft
              className={cn(
                "absolute left-2.5 size-5 fill-blue-600",
                iconLeftClasses,
              )}
            />
          )}
          {IconRight && (
            <IconRight
              className={cn(
                "absolute right-2.5 size-5 fill-blue-600",
                iconRightClasses,
              )}
            />
          )}
        </div>
      );
    } else {
      return (
        <div>
          <label
            htmlFor="test"
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Teste
          </label>
          <input
            id="test"
            className={cn(defaultClasses, roundness, className)}
            ref={ref}
            {...props}
            disabled={true}
          />
        </div>
      );
    }
  },
);

export default Input;
