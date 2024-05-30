"use client";
import { useEffect } from "react";

type Props = {
  variant: "solid";
  color: string;
  size?: string;
  className?: string;
  textColor?: "black" | "white";
  content: any;
  rounded: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
};

function Button({
  variant = "solid",
  color = "#ba8108",
  size,
  className,
  content,
  textColor = "white",
  rounded = "none",
}: Props) {
    
  const colorVariants: { [key: string]: string } = {
    "yellow-600": "bg-yellow-600",
    "red-600": "bg-red-600",
    "blue-600": "bg-blue-600",
    "green-600": "bg-green-600",
    // Add other color mappings as needed
  };
  const variants: any = {
    solid: `bg-${color}`,
  };

  const textVariants: any = {
    white: "text-white",
  };

  const roundedVariants: any = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
  };

  useEffect(() => {}, [variant, color]);

  return (
    <button
      className={`w-fit px-5 py-2 
    ${variants[variant]}
     ${colorVariants[color]}

     ${textVariants[textColor]}
     ${roundedVariants[rounded]}
     
     ${className} 

     `}>
      {content}
    </button>
  );
}

export default Button;
