import React, {
  forwardRef,
  ReactNode,
  HTMLAttributes,
  ElementType,
} from "react";
import cn from "~/utils/cn";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ as: Component = "div", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn("mx-auto w-full max-w-[1440px] px-6 xl:px-8", className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

export default Container;
