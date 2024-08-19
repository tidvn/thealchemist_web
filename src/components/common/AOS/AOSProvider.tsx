"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { PropsWithChildren, useEffect } from "react";

const AOSProvider = ({ children }: Readonly<PropsWithChildren>) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <> {children} </>;
};

export default AOSProvider;
