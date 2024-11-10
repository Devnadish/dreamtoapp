import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { DollarSign, Briefcase, Book, HelpCircle, MessageCircle } from "lucide-react";

export default function BuregerMenu() {
  const t = useTranslations("MenuItems");
  const locale = useLocale();
  return (
    <Sheet>
      <SheetTrigger
        className="rounded-full w-[50px] h-[50px] flex items-center justify-center text-foreground flex-col"
        aria-label="Open menu"
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent
        forceMount
        side="right"
        className="w-72 flex flex-col items-center gap-4"
      >
        <SheetHeader className="w-full justify-center items-center font-cairo">
          <SheetTitle className="font-amiri text-xl">{t("welcomeMsg")}</SheetTitle>
          <SheetDescription className={`w-full ${locale === 'ar' ? 'text-right' : 'text-left'} items-center text-pretty font-amiri`}>
            {t("welcomeDesction")}
          </SheetDescription>
        </SheetHeader>
        <div className="w-full flex flex-col items-center justify-center gap-4 border-t border-border pt-4">
          <MenuItems />
        </div>
        <SheetFooter className="w-full justify-center items-center">
          <button className="w-full py-2 px-4 bg-primary text-white rounded hover:bg-primary/90 transition duration-300 ease-in-out  font-cairo ">
            {t("collectPrize")}
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

const MenuIcon = React.memo(() => {
  return (
    <div className="w-[35px] h-[35px] bg-[#FF5E00] rounded-md flex items-center justify-around flex-col p-1">
      <div className="w-full h-[4px] bg-[#000080] rounded-md" />
      <div className="w-full h-[4px] bg-[#ffd700] rounded-md" />
      <div className="w-full h-[4px] bg-[#40e0d0] rounded-md" />
    </div>
  );
});

const MenuItems = React.memo(() => {
  const t = useTranslations("MenuItems");
  const locale = useLocale();

  // Define menu items with their corresponding icons
  const menuItems = [
    { href: `/${locale}/prices`, label: t("price"), icon: <DollarSign size={20} className="text-primary" /> },
    { href: `/${locale}/portfolio`, label: t("sample"), icon: <Briefcase size={20} className="text-primary" /> },
    { href: `/${locale}/blog`, label: t("blog"), icon: <Book size={20} className="text-primary" /> },
    { href: `/${locale}/faq`, label: t("faq"), icon: <HelpCircle size={20} className="text-primary" /> },
    { href: `/${locale}/contactUs`, label: t("contactUs"), icon: <MessageCircle size={20} className="text-primary" /> },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-center gap-4">
      {menuItems.map((item) => (
        <Link key={item.label} href={item.href} className="text-pretty hover:text-primary hover:bg-primary/10 rounded-md p-2 flex items-center gap-2 transition-all duration-300 ease-in-out w-full font-cairo font-semibold">
          {item.icon}
          {item.label}
        </Link>
      ))}
    </div>
  );
});
