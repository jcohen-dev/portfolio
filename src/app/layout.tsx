import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josh Cohen | Portfolio",
  description:
    "Josh Cohen, UX/UI Designer & Front-End Developer. Selected work, skills, and a way to get in touch.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#19120b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background text-on-background antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
