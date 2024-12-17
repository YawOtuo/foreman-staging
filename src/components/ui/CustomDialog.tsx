import { VariantProps, cva } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
const modalVariants = cva("", {
  variants: {
    size: {
      small: "max-w-sm",
      medium: "max-w-md",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
      "8xl": "max-w-8xl",
      full: "max-w-full h-screen !max-h-screen",
    },
  },
  defaultVariants: {
    size: "medium", // Default size variant
  },
});

interface ModalProps extends VariantProps<typeof modalVariants> {
  trigger: React.ReactNode;
  body: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
}
const CustomModal: React.FC<ModalProps> = ({
  trigger,
  body,
  header,
  footer,
  size,
  className,
  open,
  onOpenChange,
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild className="cursor-pointer">
        <button className="w-full"> {trigger}</button>
      </DialogTrigger>
      <DialogContent className={`${cn(modalVariants({ size }))} ${className}`}>
        {header && <DialogHeader>{header}</DialogHeader>}
        {body}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
