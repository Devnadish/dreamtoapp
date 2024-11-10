import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MdiEmailSealOutline } from "./icons/EmailMarkting";
import { SimpleIconsDm } from "./icons/Dm";
import { SimpleIconsNextui } from "./icons/UI";
import { MageShop } from "./icons/Ecomm";
import { CarbonApplicationWeb } from "./icons/WebApp";
import { CarbonApplicationMobile } from "./icons/MobileApp";


function HoverServiceMenu() {
  const t = useTranslations("HomePage");
  const t1 = useTranslations("services");
 const data = [
      {
        id: "mobile_app",
        title: t1("mobileApp"),
        subtitlex: t1("mobileAppTitle"),
        alt: t1("mobileAppTitle"),
        icon: <CarbonApplicationMobile width={24} height={24}/>,
        href: "/services/mobile-app",
      },
      {
        id: "website",
        title: t1("webApp"),
        subtitlex: t1("webAppTitle"),
        alt: t1("webAppTitle"),
        icon: <CarbonApplicationWeb width={24} height={24}/>,
        href: "/services/web-app",
      },
      {
        id: "ecomm",
        title: t1("ecommerce"),
        subtitlex: t1("ecommerceTitle"),
        alt: t1("ecommerce"),
          icon: <MageShop width={24} height={24}/>,
        href: "/services/ecommerce",
      },
      {
        id: "ui",
        title: t1("design"),
        subtitlex: t1("designTitle"),
        alt: t1("designTitle"),
        icon: <SimpleIconsNextui width={24} height={24}/>,
        href: "/services/ui",
      },
      {
        id: "sm",
        title: t1("digitalMarketing"),
        subtitlex: t1("digitalMarketingTitle"),
        alt: t1("digitalMarketingTitle"),
        icon: <SimpleIconsDm width={24} height={24}/>,
        href: "/services/digital-marketing",
      },
      {
        id: "emailmarkting",
        title: t1("emailMarketing"),
        subtitlex: t1("emailMarketingTitle"),
        alt: t1("emailMarketingTitle"),
        icon: <MdiEmailSealOutline width={24} height={24}/>,
        href: "/services/email-marketing",
      },
    ]




  return (
    <HoverCard   openDelay={100} closeDelay={100}  >
  <HoverCardTrigger className="font-bold font-cairo ">{t("Service")}</HoverCardTrigger>
  <HoverCardContent className="w-full ">
    <div className="grid grid-cols-2   w-full max-w-[340px]">
    {data.map((item) => (
    <Link href={item.href} key={item.id} className="flex flex-col items-start justify-center hover:bg-gray-100 rounded-lg p-2 ">
    <div className="flex flex-row items-center justify-center gap-2">
    {item.icon}
    <p className="text-sm font-semibold font-cairo">{item.title}</p>
    </div>
    <p className="text-xs font-bold font-amiri">{item.subtitlex}</p>
    </Link>
    ))}
    </div>
  </HoverCardContent>
</HoverCard>

  )
}

export default HoverServiceMenu

 