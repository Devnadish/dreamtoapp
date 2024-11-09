"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { ChangeEvent } from "react";

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const router = useRouter();
    // const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="flex space-x-4">
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
      >
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
