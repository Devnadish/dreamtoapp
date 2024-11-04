import HeroSection from "@/components/HeroSection";
import ServiceView from "@/components/ServiceView";
import { getAllServices } from "@/sanity/lib/homePage/getAllservice";
import Image from "next/image";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function Home() {
  const services = await getAllServices();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* <HeroSection /> */}
      <ServiceView posts={services} />
    </div>
  );
}
