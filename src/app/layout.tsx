import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn, fontSans } from "@/utils";

export const metadata: Metadata = {
  title: "TheAlchemist",
  description: "Alchemist All For Traders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >        {children}
      </body>
    </html>
  );
}
