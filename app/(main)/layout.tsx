import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import MetaCapiTracker from "../MetaCapiTracker";

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
  title: "Domine a Amamentação — Dra. Lorena Caramaschi",
  description: "Curso da Dra. Lorena Caramaschi (pediatra) para amamentar com confiança e sem dor desde os primeiros dias. Protocolo médico em videoaulas + bônus.",
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
      <body className="min-h-full flex flex-col">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '673959250163272');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=673959250163272&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <MetaCapiTracker />
        {children}
      </body>
    </html>
  );
}
