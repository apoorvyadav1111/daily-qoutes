"use client";

import { Navbar } from "@/components/navbar";
import { AnimatePresence } from "framer-motion";;

import { Quote } from "./components/qoute";

export default function Home() {

  return (
      <div className="flex h-full w-100% items-center justify-center bg-gray-200 dark:bg-[#0f0f0f]">
          <Navbar />
        <AnimatePresence mode="wait">
          <Quote/>
        </AnimatePresence>
      </div>
  );
}
