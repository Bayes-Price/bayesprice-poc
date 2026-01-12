import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        coral: "bg-coral text-white hover:bg-coral/90",
        "coral-outline": "border-2 border-coral text-coral bg-transparent hover:bg-coral hover:text-white",
        blue: "bg-blue text-white hover:bg-blue/90",
        red: "bg-red text-white hover:bg-red/90",
        green: "bg-green text-white hover:bg-green/90",
        yellow: "bg-yellow text-charcoal hover:bg-yellow/90",
        // New Premium Variants
        neon: "bg-white text-primary border-2 border-transparent hover:border-primary/20 shadow-neon-blue hover:shadow-neon-blue/80 text-foreground font-semibold",
        glass: "bg-glass-100 backdrop-blur-md border border-glass-200 text-foreground hover:bg-glass-200 shadow-glass",
        glow: "bg-gradient-to-r from-coral to-orange-500 text-white shadow-lg hover:shadow-neon-orange hover:scale-105 border-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-full px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
