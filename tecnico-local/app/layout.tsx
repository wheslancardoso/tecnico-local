import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/whatsapp/WhatsAppFloatingButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Manutenção de Computadores e Impressoras em São Paulo - Zona Sul | Técnico.Local",
  description:
    "Técnico autônomo especializado em manutenção de computadores e impressoras. Diagnóstico honesto, reparos profissionais e atendimento direto em São Paulo, Zona Sul. Atendimento em domicílio e laboratório.",
  keywords: [
    "manutenção de computadores",
    "conserto de impressoras",
    "técnico de informática",
    "São Paulo",
    "Zona Sul",
    "atendimento em domicílio",
  ],
  authors: [{ name: "Técnico.Local" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Manutenção de Computadores e Impressoras em São Paulo | Técnico.Local",
    description:
      "Diagnóstico técnico preciso, reparos profissionais e atendimento direto ao cliente em São Paulo, Zona Sul.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols with display=swap for non-blocking rendering */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${notoSans.variable} font-display antialiased overflow-x-hidden selection:bg-primary selection:text-white bg-background-light text-text-main`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
