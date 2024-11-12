import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useTranslations } from "next-intl";
import Link from "next/link";
import AnimatedBorderTrail from "../AnimatedBorderTrail";

function HoverFreeMenu() {
  const t = useTranslations("HomePage");
  const t1 = useTranslations("Free");
 const data = [
      {
        id: "consultation",
        title: t1("consultation"),
        subtitlex: t1("consultationTitle"),
        href: "/services/evaluation",
      },
      {
        id: "evaluation",
        title: t1("evaluation"),
        subtitlex: t1("evaluationTitle"),
        href: "/services/idea",
      },
      {
        id: "idea",
        title: t1("idea"),
        subtitlex: t1("ideaTitle"),
        href: "/services/ecommerce",
      },
      {
        id: "marketingIdea",
        title: t1("marketingIdeaTitle"),
        subtitlex: t1("marketingIdeaTitle"),
        href: "/services/ui",
      },
      {
        id: "firstPurchaseDiscount",
        title: t1("firstPurchaseDiscount"),
        subtitlex: t1("firstPurchaseDiscountTitle"),
        href: "/services/digital-marketing",
      },
      {
        id: "referralProgram",
        title: t1("referralProgram"),
        subtitlex: t1("referralProgramTitle"),
        href: "/services/email-marketing",
      },
      {
        id: "personalizedConsultation",
        title: t1("personalizedConsultation"),
        subtitlex: t1("personalizedConsultationTitle"),
        href: "/services/email-marketing",
      },
      {
        id: "membershipBenefits",
        title: t1("membershipBenefits"),
        subtitlex: t1("membershipBenefitsTitle"),
        href: "/services/email-marketing",
      },

    ]




  return (
    <HoverCard  openDelay={100} closeDelay={100}   >
      <AnimatedBorderTrail trailSize="lg" duration={"7s"}  trailColor="orange" className="w-[100px] flex items-center justify-center ">
       
       
  <HoverCardTrigger className="font-bold font-cairo flex p-1 items-center justify-center text-center w-full text-foreground bg-background">{t("free")}</HoverCardTrigger>
   </AnimatedBorderTrail>
  <HoverCardContent className="w-full"   >
    <div className="grid grid-cols-2  w-full max-w-[340px]">
    {data.map((item) => (
    <Link href={item.href} key={item.id} className="flex flex-col items-start justify-center hover:bg-gray-100 rounded-lg p-2 ">
    <div className="flex flex-row items-center justify-center gap-2">
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

export default HoverFreeMenu

 