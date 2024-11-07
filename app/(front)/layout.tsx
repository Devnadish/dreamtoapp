import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import SideMenu from "@/components/SideMenu";
import HeaderBar from "@/components/HeaderBar";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import DisableDraftMode from "@/components/DisableDraftMode";
import BodyContainer from "@/components/Container";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = localFont({
  src: "../fonts/Outfit-Regular.ttf",
  variable: "--font-outfit-regular",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${outfit.variable} ${geistMono.variable} antialiased`}
        >
          {(await draftMode()).isEnabled && (
            <div className="hidden sm:block">
              <DisableDraftMode />
              <VisualEditing />
            </div>
          )}

          <ThemeProvider>
            <HeaderBar />
            <BodyContainer>{children}</BodyContainer>
            <SideMenu />
          </ThemeProvider>
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
