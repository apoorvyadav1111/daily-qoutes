"use client";

import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";
import { motion} from "framer-motion";

const Qoute = ({tokens}:{tokens:string[]}) => {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5}}
      className="flex flex-wrap gap-x-1">
      {tokens.map((token, index) => (
        <motion.span
          key={index}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5, delay:0.1*index}}
          className="text-5xl text-gray-900 dark:text-gray-300">
          {token}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  )
}
export default function Home() {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random')
      const data = await response.json()
      setQuote(data.content.split(' '));
      setAuthor(data.author);
    } catch (error) {
      setError("Oops something went wrong....But Don't worry it always works out in the end.")
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(()=>{
    fetchQuote();
  },[]);


  return (
    <div className="flex h-full w-100% items-center justify-center p-6 m-16">
        <Navbar />
      <div className="flex flex-col text-wrap text-start translate-y-[-50%]">
        <div className="">
          {error}
        </div>
        <div className="text-5xl text-gray-900 dark:text-gray-300">
          <Qoute tokens={quote}/>
        </div>
        <div className="pt-2 w-[90%] text-end text-gray-700 dark:text-gray-400 text-3xl">
          - {author}
        </div>
      </div>
    </div>
  );
}
