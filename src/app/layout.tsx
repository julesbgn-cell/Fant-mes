import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Fantômes — débusque les abonnements que tu paies sans t'en servir",
  description:
    "Dépose ton relevé bancaire. On repère les prélèvements oubliés et on prépare les lettres de résiliation.",
  openGraph: {
    title: "Fantômes — débusque les abonnements que tu paies sans t'en servir",
    description:
      "Dépose ton relevé bancaire. On repère les prélèvements oubliés et on prépare les lettres de résiliation.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${workSans.variable} antialiased bg-[#FAF6EF] text-[#101A2B] font-[family-name:var(--font-work-sans)]`}
      >
        {children}
      </body>
    </html>
  );
}
