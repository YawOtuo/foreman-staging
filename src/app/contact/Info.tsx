import React, { ComponentType } from "react";

interface InfoProps {
  icon: ComponentType<{ size?: string | number }>;
  info_type: string;
  info: string;
  iconSize?: string | number;
}

const Info: React.FC<InfoProps> = ({
  icon: Icon,
  info,
  info_type,
  iconSize = 50,
}) => {
  return (
    <>
      <div className="mt-10 flex items-center gap-3">
        <Icon size={iconSize} />
        <div>
          <p>{info_type}</p>
          <p className="text-gray-500">{info}</p>
        </div>
      </div>
    </>
  );
};

export default Info;
