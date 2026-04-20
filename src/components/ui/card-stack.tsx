"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  handleClick,
  spread,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  handleClick?: any;
  spread?: boolean
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);


  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; 
        newArray.unshift(newArray.pop()!); 
        return newArray;
      });
    }, 10000);
  };



  return (
    <div
      className={`relative w-[80rem] sm:h-[30rem]   lg:h-${spread == true ? "[50rem]" : 'full'} pb-20 mb-20 md:h-150`}
      onClick={handleClick}
    >
      {cards.map((card, index) => {
        const spreadStyles = spread
          ? {
            top: `${index * 17}rem`,
            left: '50%',
            x: '-50%',
            y: '-50%',
            scale: 1,
          }
          : {
            top: index * -CARD_OFFSET,
            left: 0,
            x: 0,
            y: 0,
            scale: 1 - index * SCALE_FACTOR,
          };

          // console.log(cards.length)
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white  w-full md:h-60 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              ...spreadStyles,
              zIndex: cards.length - index,
            }}
          >
            <div>
              <p className="text-neutral-500 md:text-4xl sm:3xl lg:text-2xl dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
            <div className="text-neutral-700 md:text-4xl sm:xl lg:text-2xl pb-3 dark:text-neutral-200">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
