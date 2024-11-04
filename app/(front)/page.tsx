import HeroSection from "@/components/HeroSection";
import ServiceView from "@/components/ServiceView";
import { Post } from "@/sanity.types";
import { getAllServices } from "@/sanity/lib/homePage/getAllservice";
import Image from "next/image";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function Home() {
  const posts = await getAllServices();
  console.log(crypto.randomUUID);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      {/* <HeroSection /> */}
      <ServiceView posts={posts as Post[]} />
    </div>
  );
}
