"use client";

import { useState, useEffect } from "react";
import arabic from "@/public/locales/arabic.png";
import english from "@/public/locales/english.png";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LangSwicher() {
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState(locale || "ar");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  useEffect(() => setLang(locale || "ar"), [locale]);

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === "ar" ? "en" : "ar"));
    const newLocale = lang === "ar" ? "en" : "ar";
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  }

  return (
    <motion.button className="cursor-pointer w-[24px] h-[24px] text-foreground/50" onClick={toggleLanguage}> 
      <Image
        src={locale === "ar" ? arabic : english}
        width={24}
        height={24}
        sizes="24x24"
        alt="Loading Light/Dark Toggle"
        priority={false}
      />
    </motion.button>
  );
}
  
   
     