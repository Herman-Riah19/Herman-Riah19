import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar/navbar";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Herman Riah - Web Developer Portfolio",
  description:
    "Showcasing the work and services of Herman Riah, a passionate web developer specializing in modern, responsive, and high-performance websites.",
  icons: {
    icon: "next.svg",
  },
  keywords: [
    "Herman Riah",
    "Web Developer",
    "Portfolio",
    "Frontend",
    "Backend",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Web Development Services",
  ],
  authors: [
    { name: "Herman Riah", url: "https://herman-riah19.vercel.app/en" },
  ],
  creator: "Herman Riah",
  openGraph: {
    title: "Herman Riah - Web Developer Portfolio",
    description:
      "Discover my web development projects and services. Let's build something amazing together!",
    url: "https://herman-riah19.vercel.app/en",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Herman Riah Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herman Riah - Web Developer Portfolio",
    description: "Explore my web development work and services.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const message = useMessages();
  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="E28uHybi33uoxITvAn5NzpOUu3aZiCoBxQMf-ukGXo0"
        />
        <title>Herman Riah: Portfolio</title>
      </head>
      <body
        className={cn(
          "bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={message}>
            <TooltipProvider>
              <NeonGradientCard className="m-0 p-0">
                <Navbar />
                {children}
                <Toaster />
              </NeonGradientCard>
            </TooltipProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
