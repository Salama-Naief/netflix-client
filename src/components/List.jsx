import React, { useRef, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import ListItems from "./ListItems";
import { motion } from "framer-motion";

export default function List({ list }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [slideAnim, setSlideAnim] = useState(null);
  const listRef = useRef(null);

  const handleClick = (dire) => {
    const distance = listRef.current.getBoundingClientRect().x;

    if (dire === "left" && slideNumber > 0) {
      setSlideAnim(255 + distance);
      setSlideNumber(slideNumber - 1);
    } else if (dire === "right" && slideNumber < 5) {
      setSlideAnim(-255 + distance);
      setSlideNumber(slideNumber + 1);
    }
  };
  return (
    <div className="py-1 w-full">
      <div className="text-white px-8 py-2 font-medium">{list.title}</div>
      <div className="relative flex items-center">
        <div
          onClick={() => handleClick("left")}
          className="h-full text-4xl opacity-60 cursor-pointer bg-black text-white absolute bottom-0 left-0 flex items-center z-50"
        >
          <MdArrowBackIosNew />
        </div>
        <motion.div
          className="flex items-center px-9"
          initial={{ x: 0 }}
          animate={{ x: slideAnim }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
          ref={listRef}
        >
          {list?.content.map((movie, index) => (
            <ListItems key={index} movieId={movie} />
          ))}
        </motion.div>

        <div
          onClick={() => handleClick("right")}
          className="h-full text-4xl opacity-60 cursor-pointer text-white bg-black absolute bottom-0 right-0 flex items-center z-50"
        >
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
}
