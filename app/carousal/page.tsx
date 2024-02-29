"use client";

import { Navbar } from "@/components/navbar";
import { AnimatePresence } from "framer-motion";;

import { Quotes } from "./components/qoutes";

export default function Home() {

  return (
      <div className="flex h-full w-100% items-center justify-center p-6 m-16">
          <Navbar />
        <AnimatePresence mode="wait">
          <Quotes />
        </AnimatePresence>
      </div>
  );
}
