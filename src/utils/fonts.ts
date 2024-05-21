import { Poppins as FontSans, Poppins as FontMono } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "300"
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "300"
})
