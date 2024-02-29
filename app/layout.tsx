import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qoute of the day",
  description: "Get random qoutes of the day, a minimalistic desktop screensaver website",
  icons:{
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
              {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
