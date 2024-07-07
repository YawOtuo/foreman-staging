import React, { ReactNode } from "react";
import { Tooltip } from "@nextui-org/react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

const Tip: React.FC<TooltipProps> = ({ children, content }) => {
  return (
    <Tooltip
      showArrow={true}
      content={content}
      className="bg-gray-300 w-64 p-2 rounded-sm text-sm"
    >
      {children}
    </Tooltip>
  );
};

export default Tip;
