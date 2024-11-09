"use client";
import React from "react";
import Logo from "@/components/header/Logo";
import BuregerMenu from "@/components/header/BuregerMenu";
import ThemeSwitch from "./ThemeSwitch";
import LangSwicher from "./LangSwicher";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

function HeaderBar({locale}:{locale:string}) {
  console.log(locale)
  return (
    <header className="flex items-center justify-between fixed top-0 left-0 w-full p-4 h-[60px] z-10 bg-white/20 backdrop-blur-3xl shadow-lg" >
      <Logo locale={locale} />

      <Link href="/worksample" className="text-foreground">
        W
      </Link>
      <div className="flex items-center gap-4">
       
        <BackButton />
        <ThemeSwitch />
        <LangSwicher />
      
      </div>
    </header>
  );
}

export default HeaderBar;

const BackButton: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return null;

  return (
    <button onClick={() => router.back()} className="text-foreground">
      Back
    </button>
  );
};
