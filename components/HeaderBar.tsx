import React from "react"; // Import React to avoid UMD global error
import dynamic from "next/dynamic"; // Import dynamic for code splitting
import Logo from "@/components/header/Logo";
import Link from "next/link";
import AnimatedModal from "./AnimatedModal";
import AnimatedBorderTrail from "./AnimatedBorderTrail";

// Dynamically import components to reduce initial bundle size
const DynamicHoverServiceMenu = dynamic(() => import("./HoverServiceMenu"));
const DynamicHoverFreeMenu = dynamic(() => import("./HoverFreeMenu"));
const DynamicBuregerMenu = dynamic(() => import("@/components/header/BuregerMenu"));

const HeaderBar = React.memo(({ locale }: { locale: string }) => {

  

  return (
    <header className="flex items-center justify-between fixed top-0 left-0 w-full p-4 h-[60px] z-10 bg-white/20 backdrop-blur-3xl shadow-lg">
      <Logo locale={locale} />
      <>
        <DynamicHoverServiceMenu />
        <DynamicHoverFreeMenu />
        <DynamicBuregerMenu />
        
      </>
      {/* <Link href={`/${locale}/worksample`} className="text-foreground">
        W
      </Link> */}
    </header>
  );
});

export default HeaderBar;

