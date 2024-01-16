"use client";

import React from "react";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import Link from "next/link";

const PageNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="z-10 w-full h-20 absolute shadow-md bg-orange-200">
        <div className="flex flex-row w-full h-full justify-between items-center px-4 lg:px-16">
          <Link href="/" className="text-2xl font-bold">
            Meals App
          </Link>
          <div className=" flex flex-row gap-x-6 invisible lg:visible">
            <p className="hover:underline">Lorem Ipsum</p>
            <p className="hover:underline">Lorem Ipsum</p>
            <p className="hover:underline">Lorem Ipsum</p>
          </div>
        </div>

        <Sheet>
          {/* Trigger Full */}
          <SheetTrigger
            className={`fixed top-4 right-4 z-10 rounded-full p-7 outline-none transition-opacity duration-1000 border-[2px] border-orange-500 
            ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <AlignJustify
              color="#f97316
"
            />
          </SheetTrigger>

          {/* Trigger Small */}
          <SheetTrigger
            className={`fixed top-4 right-4 z-10 rounded-full p-7 outline-none transition-opacity duration-1000 border-[2px] border-orange-500 
            ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <AlignJustify
              color="#f97316
"
            />
          </SheetTrigger>

          <SheetContent>
            {/* Header */}
            <SheetHeader className="text-left">
              <SheetTitle>Meals App</SheetTitle>
              <SheetDescription>LOREM IPSUM</SheetDescription>
            </SheetHeader>

            {/* Grid List Link */}
            <div className="grid gap-4 py-4 grid-col-1">
              <p className="hover:underline">Lorem Ipsum</p>
              <p className="hover:underline">Lorem Ipsum</p>
              <p className="hover:underline">Lorem Ipsum</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default PageNav;
