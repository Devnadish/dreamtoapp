import { useTranslations } from "next-intl";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};

export default Loader;

export const SendingToserver: React.FC = () => {
  const t = useTranslations("button");

  return (
    <div className="flex justify-center items-center h-full gap-2">
      <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-blue-500 border-solid"></div>
      <span className="ml-2">{t("sending")}</span>
    </div>
  );
};
