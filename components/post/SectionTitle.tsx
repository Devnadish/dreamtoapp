import React from "react";

interface PropType {
  title: string;
  icon?: React.ReactNode;
}

function SectionTitle({ title, icon }: PropType) {
  return (
    <div className="flex flex-row gap-2  items-center borer-b-2 border-b-2 border-orangeColor w-fit ">
      {icon}
      <p className="text-2xl font-cairo font-semibold">{title}</p>
    </div>
  );
}

export default SectionTitle;
