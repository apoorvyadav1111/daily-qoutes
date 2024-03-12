"use client";

import { motion} from "framer-motion";
import { useEffect, useState } from "react";
import jsondata from "@/app/data.json";

export const Quote = () => {
  const [quote, setQuote] = useState([] as string[]);
  const [author, setAuthor] = useState('');

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * jsondata.length);
    const randomQuote = jsondata[randomIndex];
    setQuote((randomQuote.content as string).split(' '));
    setAuthor(randomQuote.author);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
        <motion.div 
          exit={{opacity:0, transition:{duration:0.5}}}
          className="flex flex-col text-wrap text-center md:text-start translate-y-[-20%] p-4">
          <div className="text-3xl lg:text-5xl text-gray-900 dark:text-gray-300">
                <div
                  className="flex flex-wrap gap-x-1">
                  {quote.map((token, index) => (
                    <motion.span
                      key={index}
                      initial={{opacity:0}}
                      animate={{opacity:1}}
                      transition={{duration:0.5, delay:0.1*index}}
                      className="text-3xl lg:text-5xl text-gray-900 dark:text-gray-300">
                      {token}&nbsp;
                    </motion.span>
                  ))}
                  </div>
            </div>
            <motion.div 
              key="1"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.5, delay:0.5*quote.length}}
              className="pt-2 w-[90%] text-end text-gray-700 dark:text-gray-400 text-2xl lg:text-3xl"
              >
              - {author}
            </motion.div>
        </motion.div>
  );
}
