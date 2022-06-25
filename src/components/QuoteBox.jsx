import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaTwitter, FaTumblr } from "react-icons/fa";
import axios from "axios";

const QuoteBox = () => {
  const listColor = [
    "green-400",
    "green-700",
    "slate-700",
    "lime-600",
    "red-600",
    "red-700",
    "orange-600",
    "amber-500",
    "sky-600",
    "indigo-800",
    "rose-500",
    "pink-700",
  ];
  const [color, setColor] = useState("green-400");
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((result) => {
      setQuote(result.data);
      console.log(quote);
    });
  }, []);

  const handleNewQuote = () => {
    axios.get("https://api.quotable.io/random").then((result) => {
      setQuote(result.data);
      console.log(quote);
    });

    setColor(listColor[Math.floor(Math.random() * listColor.length)]);
  };

  return (
    <div
      className={`bg-${color} w-screen h-screen relative flex justify-center items-center`}
    >
      <div className="w-[450px] p-5 bg-slate-200 text-center">
        <p className="text-2xl text-slate-800">
          <span>
            <FaQuoteLeft className="inline mr-3" />
          </span>
          {quote.content}
        </p>

        <p className="text-right py-4">- {quote.author}</p>
        <div className="flex items-center justify-between text-slate-50">
          <div className="flex justify-end items-center gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`}
              className={`bg-${color} p-2 rounded`}
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,bughowy&caption=${quote.author}&content=${quote.content}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
              className={`bg-${color} p-2 rounded`}
            >
              <FaTumblr size={20} />
            </a>
          </div>
          <div>
            <button
              onClick={handleNewQuote}
              className={`bg-${color} p-2 rounded`}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
