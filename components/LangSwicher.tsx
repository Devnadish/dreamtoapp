"use client";

import { Sun, MoonStar } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import arabic from "@/public/locales/arabic.png";
import english from "@/public/locales/english.png";
import Image from "next/image";

export default function LangSwicher() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState("ar");
  // const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

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

  if (lang === "ar") {
    return (
      <Image
        src={arabic}
        width={24}
        height={24}
        sizes="24x24"
        alt="Loading Light/Dark Toggle"
        priority={false}
        onClick={() => {
          setLang("en");
        }}
      />
    );
  }
  if (lang === "en") {
    return (
      <Image
        src={english}
        width={24}
        height={24}
        sizes="24x24"
        alt="Loading Light/Dark Toggle"
        priority={false}
        onClick={() => {
          setLang("ar");
        }}
      />
    );
  }
}
