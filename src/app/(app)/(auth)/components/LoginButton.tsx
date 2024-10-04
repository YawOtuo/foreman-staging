import { Button } from "@/components/ui/button";

interface LoginButtonProps {
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  name: string;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export default function LoginButton({
  onClick,
  type,
  name,
  className,
  icon,
  disabled,
}: LoginButtonProps) {
  return (
    <Button
      animated={"slide"}
      variant={"outline"}
      onClick={onClick}
      type={type}
      size={"lg"}
      disabled={disabled}
      className={` w-full  ${className} text-primary border-2 border-primary gap-2 `}
      className_animated={`  ${className} text-black  border-primary gap-2`}
    >
      {icon}
      {name}
    </Button>
  );
}
