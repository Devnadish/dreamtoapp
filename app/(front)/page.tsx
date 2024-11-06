import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import { MdiApprove } from "@/components/icons/Approval";
import { MaterialSymbolsPartnerExchange } from "@/components/icons/exculisve";
import { FileIconsPowerbuilder } from "@/components/icons/Experts";
import { IcRoundTouchApp } from "@/components/icons/OurService";
import SectionView from "@/components/post/SectionView";
import { getData } from "@/sanity/lib/homePage/getAllservice";
import { Suspense } from "react";

// Metadata configuration using Next.js 15 metadata API
export const metadata: Metadata = {
  title: "Your Page Title",
  description: "A brief description of your page for SEO.",
  keywords: "keyword1, keyword2, keyword3",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Page Title",
    description: "A brief description of your page for SEO.",
    images: ["/path/to/image.jpg"],
    url: "https://yourwebsite.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Page Title",
    description: "A brief description of your page for SEO.",
    images: ["/path/to/image.jpg"],
  },
};

// Optimize static generation and revalidation
export const dynamic = "force-static";
export const revalidate = 60;

// Create loading components for better UX
const LoadingSection = () => (
  <div className="w-full h-48 animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg" />
);

export default async function Home() {
  // Parallel data fetching with error handling
  const [services, experts, support, provide] = await Promise.all([
    getData("Service").catch(() => []),
    getData("Experts").catch(() => []),
    getData("Support").catch(() => []),
    getData("Provide").catch(() => []),
  ]);

  const sections = [
    {
      data: services,
      title: "Our Service",
      icon: <IcRoundTouchApp width={38} height={38} />,
    },
    {
      data: experts,
      title: "Our Expertise",
      icon: <FileIconsPowerbuilder width={38} height={38} />,
    },
    {
      data: support,
      title: "Exclusively yours",
      icon: <MaterialSymbolsPartnerExchange width={38} height={38} />,
    },
    {
      data: provide,
      title: "We Ensure",
      icon: <MdiApprove width={38} height={38} />,
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      {sections.map((section, index) => (
        <Suspense key={section.title} fallback={<LoadingSection />}>
          <SectionView
            posts={section.data}
            title={section.title}
            icon={section.icon}
          />
        </Suspense>
      ))}
    </main>
  );
}
