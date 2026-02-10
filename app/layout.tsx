import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maricielo Alata Roman | Desarrolladora FullStack",
  description:
    "Portafolio profesional de Maricielo Alata Roman, desarrolladora FullStack, analista de datos y entusiasta de la inteligencia artificial.",
  keywords: [
    "Maricielo Alata Roman",
    "Desarrolladora FullStack",
    "React",
    "Next.js",
    "Ingeniería de Sistemas",
    "Analista de Datos",
    "Portafolio",
  ],
  authors: [{ name: "Maricielo Alata Roman" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}

      </body>
    </html>
  );
}
