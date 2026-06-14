import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#32191a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Domine a Amamentação — Dra. Lorena Carramaschi",
  description: "Curso da Dra. Lorena Carramaschi (pediatra) para amamentar com confiança e sem dor desde os primeiros dias. Protocolo médico em videoaulas + bônus.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Domine a Amamentação",
    description: "Construa uma relação tranquila com seu bebê amamentando com confiança e sem dor.",
    images: ["/foto2.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
