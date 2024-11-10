"use client";

import { Sun, MoonStar } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./Loader";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) return  <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-[24px] w-[24px] border-t-4 border-blue-500 border-solid"></div>
    </div>

  const handleThemeChange = (theme: string) => setTheme(theme);

  if (resolvedTheme === undefined) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={38}
        height={38}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  }

  const Icon = resolvedTheme === "dark" ? Sun : MoonStar;

  return (
    <Icon onClick={() => handleThemeChange(resolvedTheme === "dark" ? "light" : "dark")} className="cursor-pointer w-[24px] h-[24px] text-foreground/50" />
  );
}
