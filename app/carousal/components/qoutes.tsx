"use client";

import { useEffect, useState } from "react";
import jsondata from "@/app/data.json";

export const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState(''); 

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * jsondata.length);
    const randomQuote = jsondata[randomIndex];
    setQuote(randomQuote.content.split(' '));
    setAuthor(randomQuote.author);
    setTimeout(() => {
      fetchQuote();
    }, 10000)
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
        <div
          className="flex flex-col text-wrap text-start translate-y-[-20%] transition-opacity">
          <div className="text-5xl text-gray-900 dark:text-gray-300">
                <div
                  className="flex flex-wrap gap-x-1">
                  {quote.map((token, index) => (
                    <span
                      key={index}
                      className="text-5xl text-gray-900 dark:text-gray-300">
                      {token}&nbsp;
                    </span>
                  ))}
                  </div>
            </div>
            <div 
              key="1"
              className="pt-2 w-[90%] text-end text-gray-700 dark:text-gray-400 text-3xl"
              >
              - {author}
            </div>
        </div>
  );
}
