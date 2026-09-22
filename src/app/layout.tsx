import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { links, site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.role} & Competitive Programmer`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.fullName, url: links.github }],
  creator: site.fullName,
  keywords: [
    "Bassem Magdy", "Front-End Developer", "React", "Next.js", "Tailwind CSS", "ASP.NET Core",
    "Competitive Programming", "Codeforces Expert", "ICPC", "ECPC", "Beni Suef University", "Egypt",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${site.name} Portfolio`,
    title: `${site.name} | ${site.role} & Competitive Programmer`,
    description: site.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: `${site.name} | ${site.role}`, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#06070b", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
