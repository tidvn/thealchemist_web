/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

const Page404 = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:gap-28 md:px-44 md:py-20 lg:flex-row lg:p-24">
      <div className="relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-2xl font-bold text-gray-800">
                Looks like you've found the doorway to the great nothing
              </h1>

              <p className="my-4 text-gray-800">
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>
              <Link href="/">
                <Button
                  pill
                  color="blue"
                  className="mt-8 bg-primary text-white"
                >
                  Take me home
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="" />
          </div>
        </div>
      </div>

      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="" />
      </div>
    </div>
  );
};

export default Page404;
