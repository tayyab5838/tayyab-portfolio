import React from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section className="my-14 mx-10 sm:mx-14 md:mx-16 lg:mx-20">
      <div>
        <div className="flex flex-col items-center space-y-4">
          <p className="font-normal text-xs text-red">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </p>
          <h3 className="font-bold text-xl text-offWhite">My Portfolio</h3>
        </div>
        {/* portfolio card component */}
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolio;
