import { Button } from "@/components/ui/button";

interface LoginButtonProps {
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  name: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function LoginButton({
  onClick,
  type,
  name,
  className,
  icon,
}: LoginButtonProps) {
  return (
    <Button
      animated={"slide"}
      variant={"outline"}
      onClick={onClick}
      type={type}
      size={"lg"}
      className={` w-full  ${className} text-primary border-2 border-primary gap-2 `}

      className_animated={`  ${className} text-black  border-primary gap-2`}>
      {icon}
      {name}
    </Button>
  );
}
