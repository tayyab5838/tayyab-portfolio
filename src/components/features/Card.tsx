import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { cardData } from "@/lib/data";
import getIconComponent from "./GetIcon";

const Card = () => {
  return (
    <>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-x-4">
        {cardData.map((card: any) => {
          return (
            <div className="bg-bgSecondary hover:bg-bgThird group py-6 px-8 rounded-xl shadow-md shadow-black">
              <div className="hover:-translate-y-3 transition duration-500 ease-in-out flex flex-col space-y-2 ">
                {/* getting icons dynamically from getIconComponent */}
                <span>{getIconComponent(card.titleIcon)}</span>
                <h3 className="text-offWhite text-xl font-bold">
                  {card.title}
                </h3>
                <p className="text-offWhite text-sm font-medium">
                  {card.description}
                </p>
                <span className="invisible group-hover:visible transition-all duration-200 ease-in-out">
                  <AiOutlineArrowRight
                    style={{ color: "e62e4a", fontSize: "25px" }}
                  />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
