import "@/styles/globals.css"
import { Metadata, Viewport } from "next"


import { fontSans } from "@/utils"
import { cn } from "@/utils/cn"
import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator, ThemeProvider } from "@/components/common"
import { AppConstant } from "@/const"

export const metadata: Metadata = {
  title: {
    default: AppConstant.SITE_CONFIG.name,
    template: `%s - ${AppConstant.SITE_CONFIG.name}`,
  },
  description: AppConstant.SITE_CONFIG.description,
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >

          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>

        </body>
      </html>
    </>
  )
}