import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from '@/lib/utils'
import "./globals.css";
import { Toaster } from '@/components/ui/toaster';
import { ProModal } from '@/components/pro-modal';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Companion Ai",
  description: "Your new buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-secondary",inter.className)}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <ProModal />
          {children}
          <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
