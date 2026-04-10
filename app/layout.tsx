import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoctuaRx | Clinical Telepharmacy for Critical Access & Rural Hospitals",
  description:
    "NoctuaRx delivers board-certified clinical pharmacists and remote pharmacy services to critical access and rural hospitals — 24/7, on demand.",
  keywords:
    "telepharmacy, remote pharmacy, critical access hospital, rural hospital, clinical pharmacist, medication order verification",
  openGraph: {
    title: "NoctuaRx | Clinical Telepharmacy",
    description:
      "Board-certified remote pharmacists protecting patients in critical access and rural hospitals — around the clock.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
