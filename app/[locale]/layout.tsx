import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils';
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { TooltipProvider } from "@/components/ui/tooltip";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Herman Riah",
  description: "Portfolio developper",
  icons: {
    icon: 'next.svg'
  }
}


export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const message = useMessages()
  return (
    <html lang={locale}>
      <head>
        <meta name="google-site-verification" content="E28uHybi33uoxITvAn5NzpOUu3aZiCoBxQMf-ukGXo0" />
        <title>Herman Riah: Portfolio</title>
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-6xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={message}>
              <TooltipProvider>
                {children}  
              </TooltipProvider>
            </NextIntlClientProvider>  
          </ThemeProvider>
      </body>
    </html>
  );
}
