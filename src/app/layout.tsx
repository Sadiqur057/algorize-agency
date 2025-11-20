/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/layout/HeaderWrapper";
import FooterWrapper from "@/components/layout/FooterWrapper";
// import { LenisProvider } from "@/components/providers/lenis-provider";

const inter = Inter({ subsets: ["latin"] });

// Fetch dynamic title from API
async function fetchMetaData() {
  try {
    const response = await fetch(
      `${process.env.API_URL}/settings/admin/prefix`,
      {
        next: {
          revalidate: 1 * 60 * 60,
        }, // Revalidate based on cache time in hours
      }
    );
    const data = await response.json();

    const settings = data?.data?.reduce((acc:any, item:any) => {
      const [group, field] = item.key.split(".");
      if (!acc[group]) acc[group] = {};
      acc[group][field] = item.value;
      return acc;
    }, {});
    return settings;
  } catch (error) {
    console.error("Failed to fetch dynamic title:", error);
    return "Algorize Agency";
  }
}

export async function generateMetadata() {
  const settings = await fetchMetaData();
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://algorize-agency.vercel.app";

  return {
    title: {
      default: settings?.admin?.site_name_algorize || "Algorize Agency",
      template: `%s | ${settings?.admin?.site_name_algorize}`,
    },
    metadataBase: new URL(baseUrl),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    description: settings?.admin?.meta_description_algorize || "SaaS Boilerplate",
    keywords:
      settings?.admin?.meta_keywords_algorize ||
      "web development, ui/ux design, digital marketing, seo, tech agency",
    authors: [{ name: settings?.admin?.site_name_algorize || "Algorize" }],
    creator: settings?.admin?.site_name_algorize || "Algorize",
    publisher: settings?.admin?.site_name_algorize || "Algorize",
    icons: {
      icon: settings?.admin?.favicon_algorize,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      siteName: settings?.admin?.site_name_algorize || "Algorize Agency",
      title: settings?.admin?.site_name_algorize || "Algorize Agency",
      description: settings?.admin?.meta_description_algorize || "SaaS Boilerplate",
      images: [
        {
          url: settings?.admin?.meta_image_algorize,
          width: 1200,
          height: 630,
          alt: settings?.admin?.site_name_algorize || "Algorize Agency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.admin?.site_name_algorize || "Algorize Agency",
      description: settings?.admin?.meta_description_algorize || "Algorize Agency Porfolio",
      images: [settings?.admin?.meta_image_algorize],
      creator: `@${settings?.admin?.site_name_algorize || "Algorize"}`,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      {/* <LenisProvider> */}
      <body className={`${inter.className} antialiased`}>
        <HeaderWrapper />
        <div className="overflow-x-hidden">{children}</div>
        <FooterWrapper />
      </body>
      {/* </LenisProvider> */}
    </html>
  );
}
