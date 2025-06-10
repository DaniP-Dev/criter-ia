import { NextIntlClientProvider } from "next-intl";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Criter-IA | Consultoría en comunicación política y análisis de datos",
  description:
    "Criter-IA es una firma de consultoría en comunicación política que transforma datos en poder narrativo. Creamos, posicionamos y fortalecemos líderes políticos con inteligencia digital, análisis territorial y estrategias de influencia.",
  openGraph: {
    title:
      "Criter-IA | Consultoría en comunicación política y análisis de datos",
    description:
      "Transformamos datos en poder narrativo para líderes políticos. Estrategias personalizadas, escucha social, análisis territorial y tecnología propia para decisiones precisas y segmentadas.",
    url: "https://criter-ia.vercel.app",
    siteName: "Criter-IA",
    images: [
      {
        url: "https://criter-ia.vercel.app/imgs/logoLink.png",
        width: 1200,
        height: 630,
        alt: "Logo de Criter-IA",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Criter-IA | Consultoría en comunicación política y análisis de datos",
    description:
      "Consultoría política basada en datos, escucha social y tecnología propia. Impulsa tu liderazgo con Criter-IA.",
    images: ["https://criter-ia.vercel.app/imgs/logoLink.png"],
  },
  keywords: [
    "consultoría política",
    "comunicación política",
    "análisis de datos",
    "estrategias de influencia",
    "inteligencia digital",
    "análisis territorial",
    "Criter-IA",
    "consultoría electoral",
    "escucha social",
    "tecnología política",
  ],
  authors: [{ name: "Criter-IA", url: "https://criter-ia.vercel.app" }],
  creator: "Criter-IA",
  publisher: "Criter-IA",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
