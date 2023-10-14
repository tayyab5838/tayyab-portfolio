import React from "react";
import { portFolioData } from "@/lib/data/portFolioData";
import Image from "next/image";
import { CgHeart } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";

const PortfolioCard = () => {
  return (
    <div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-x-4 cursor-pointer">
        {portFolioData.map((card: any, i: number) => {
          return (
            <div
              key={i}
              className="bg-bgSecondary hover:bg-bgThird group py-6 px-6 rounded-xl shadow-md shadow-black"
            >
              <div className="transition duration-500 ease-in-out flex flex-col space-y-1 ">
                <div className="h-fit w-fit overflow-hidden rounded-xl">
                  <Image
                    className="self-center object-cover rounded-xl hover:scale-110  transition duration-300"
                    src={card.image}
                    alt="card-image"
                  />
                </div>
                <div className="flex justify-between py-2">
                  <p className="text-red font-light text-xs">{card.type}</p>
                  <div className="flex items-center text-offWhite  gap-x-1">
                    <CgHeart />
                    {card.likes}
                  </div>
                </div>
                <h3 className="font-bold flex text-offWhite text-lg hover:text-red group">
                  {card.title}{" "}
                  <div className="items-center flex transition-all duration-500 scale-0  group-hover:scale-100 ease-in-out">
                    <FiArrowUpRight />
                  </div>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioCard;
