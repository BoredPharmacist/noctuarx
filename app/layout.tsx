import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NetLinkRx | Clinical Telepharmacy for Critical Access & Rural Hospitals",
  description:
    "NetLinkRx delivers board-certified clinical pharmacists and remote pharmacy services to critical access and rural hospitals — 24/7, on demand.",
  keywords:
    "telepharmacy, remote pharmacy, critical access hospital, rural hospital, clinical pharmacist, medication order verification, NetLinkRx",
  openGraph: {
    title: "NetLinkRx | Clinical Telepharmacy",
    description:
      "Board-certified remote pharmacists protecting patients in critical access and rural hospitals — around the clock.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
