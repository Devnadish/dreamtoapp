import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import SideMenu from "@/components/headerAndFotter/SideMenu";
import HeaderBar from "@/components/headerAndFotter/HeaderBar";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import DisableDraftMode from "@/components/DisableDraftMode";
import BodyContainer from "@/components/Container";
import { ThemeProvider } from "@/components/theme-provider";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getLangDir } from "rtl-detect";
import { routing } from "@/i18n/routing";
import { Toaster } from "@/components/ui/toaster";
import AnimatedModal from "@/components/AnimatedModal";

const outfit = localFont({
  src: "../../fonts/Outfit-Regular.ttf",
  variable: "--font-outfit-regular",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const amiri = localFont({
  src: "../../fonts/Amiri-Regular.ttf",
  variable: "--font-amiri",
  weight: "100 900",
});

const cairo = localFont({
  src: "../../fonts/Cairo-Regular.ttf",
  variable: "--font-cairo",
  weight: "100 200 300 400 500 600 700 800 900",
});

const tajawal = localFont({
  src: "../../fonts/Tajawal-Black.ttf",
  variable: "--font-tajawal",
  weight: "100 200 300 400 500 600 700 800 900",
});

const tajawalLight = localFont({
  src: "../../fonts/Tajawal-Light.ttf",
  variable: "--font-tajawal-light",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const direction = getLangDir(locale);

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${geistMono.variable} ${amiri.variable} ${cairo.variable} ${tajawal.variable} ${tajawalLight.variable} antialiased`}
      >
        {(await draftMode()).isEnabled && (
          <div className="hidden sm:block">
            <DisableDraftMode />
            <VisualEditing />
          </div>
        )}

        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <HeaderBar locale={locale} />
            <AnimatedModal />

            <BodyContainer>{children}</BodyContainer>
            <SideMenu />
          </NextIntlClientProvider>
        </ThemeProvider>
        <SanityLive />
        <Toaster />
      </body>
    </html>
  );
}
