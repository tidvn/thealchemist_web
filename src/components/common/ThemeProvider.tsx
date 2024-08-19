"use client";
import { Flowbite } from "flowbite-react";
import theme from "@/theme";
import AOSProvider from "./AOS/AOSProvider";
import { ParallaxProvider } from "react-scroll-parallax";
import "atropos/css";

const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AOSProvider>
        <ParallaxProvider>
          <Flowbite theme={{ theme }}>
            {children}
          </Flowbite>
        </ParallaxProvider>
      </AOSProvider>
    </>)
};

export default ThemeProvider;
