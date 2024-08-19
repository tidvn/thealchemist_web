"use client";
import { Flowbite } from "flowbite-react";
import { ParallaxProvider } from "react-scroll-parallax";
import "flowbite";
import theme from "@/theme";



const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ParallaxProvider>
        <Flowbite theme={{ theme:theme }}>
          {children}
        </Flowbite>
      </ParallaxProvider>
    </>)
};

export default ThemeProvider;
