"use client";
import React from "react";
import Logo from "@/components/header/Logo";
import BuregerMenu from "@/components/header/BuregerMenu";
import Form from "next/form";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Input } from "./ui/input";
import { MajesticonsLogin } from "./icons/Login";
import ThemeSwitch from "./ThemeSwitch";
import LangSwicher from "./LangSwicher";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

function HeaderBar() {
  const { user } = useUser();
  return (
    <header className="flex items-center justify-between fixed top-0 left-0 w-full p-4 h-[60px] z-10 bg-white/20 backdrop-blur-3xl shadow-lg">
      <Logo />

      <Link href="/worksample" className="text-foreground">
        W
      </Link>
      <div className="flex items-center gap-4">
        <BackButton />
        <ThemeSwitch />
        <LangSwicher />
        <ClerkLoaded>
          {user ? (
            <div className="flex items-center flex-col">
              <UserButton />
              <p className="text-sm text-foreground">{user.firstName}</p>
            </div>
          ) : (
            <div className="text-foreground bg-orangeColor rounded-md w-10 h-10 flex items-center justify-center">
              <SignInButton mode="modal">
                <MajesticonsLogin className="w-6 h-6" />
              </SignInButton>
            </div>
          )}
        </ClerkLoaded>
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
