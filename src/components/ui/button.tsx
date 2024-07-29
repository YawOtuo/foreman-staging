import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap  text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.01] transition-all group/slide relative rounded-md overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        black: "bg-black text-white "
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9  px-3",
        md: "h-10  px-5",

        lg: "h-11  px-8",
        xl: "h-14 px-10 py-5 ",
        icon: "h-10 w-10",
      },
      rounded: {
        large: "rounded-3xl",
      },
      animated: {
        slide: "border border-black  overflow-hidden relative",
        none: "",
      },
      fontSize: {
        xs: "text-xs",
        sm: "text-sm",
        lg: "text-lg",
        xl: "text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  className_animated?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      fontSize,
      animated,
      asChild = false,
      className_animated,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, rounded, fontSize, className })
        )}
        ref={ref}
        {...props}>
        {animated === "slide" && (
          <>
            <span className={`flex items-center relative z-10 group-hover/slide:text-white transition-all duration-500 ${className_animated}`}>
              {props.children}
            </span>
            <div className="absolute inset-0 bg-black w-0 group-hover/slide:w-full transition-all duration-500"></div>
          </>
        )}
        {animated !== "slide" && props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
