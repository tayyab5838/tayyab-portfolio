"use client";
import React from "react";
import Image from "next/image";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import profile from "public/profile-image-withoutbg.png";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  return (
    <section>
      <div className="relative flex flex-col-reverse lg:flex-row lg:space-x-20 px-10 sm:px-14 md:px-16 lg:px-20 mt-10 lg:mt-28 mb-10">
        {/* left div */}
        <div className="flex flex-col justify-between lg:flex-1 lg:flex-grow-0 mt-10 space-y-8 lg:mt-0">
          <p className="text-offWhite">WELLCOME TO MY WORLD</p>
          <h1 className="text-white font-extrabold text-3xl lg:text-5xl xl:text-6xl  my-3 leading-[50px] lg:leading-[70px]">
            Hi&rsquo; I&apos;m <span className="text-red">Tayyab</span>
            <br />
            <span>a </span>
            <span>{<AnimatedText />}</span>
          </h1>
          <p className="text-offWhite mt-6 leading-8 font-medium">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I&apos;m
            not adding motion just to spruce things up, but doing it in ways
            that.
          </p>
          {/*social links and skills icons */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-8 space-y-6 sm:space-y-0 mt-24 ">
            {/* social links */}
            <div>
              <h2 className="text-offWhite font-normal">FIND WITH ME</h2>
              <div className="flex space-x-3 sm:space-x-6 mt-4">
                <div className="bg-[#27292a] py-4 px-5 shadow-xl drop-shadow-xl cursor-pointer">
                  <FiLinkedin style={{ color: "#c4cfde", fontSize: "20px" }} />
                </div>
                <div className="bg-[#27292a] py-4 px-5 shadow-xl drop-shadow-xl cursor-pointer">
                  <FiTwitter style={{ color: "#c4cfde", fontSize: "20px" }} />
                </div>
                <div className="bg-[#27292a] py-4 px-5  shadow-xl drop-shadow-xl cursor-pointer">
                  <FiGithub style={{ color: "#c4cfde", fontSize: "20px" }} />
                </div>
              </div>
            </div>
            {/* skills icons */}
            <div>
              <h2 className="text-offWhite font-normal">BEST SKILL ON</h2>
              <div className="flex space-x-3 sm:space-x-6 mt-4">
                <div className="bg-[#27292a] py-4 px-5 shadow-xl drop-shadow-xl  ">
                  <SiNextdotjs style={{ color: "#ffff", fontSize: "20px" }} />
                </div>
                <div className="bg-[#27292a] py-4 px-5 shadow-xl drop-shadow-xl  ">
                  <SiTypescript
                    style={{
                      color: "#0076c6",
                      rounded: "full",
                      fontSize: "20px",
                    }}
                  />
                </div>
                <div className="bg-[#27292a] py-4 px-5 shadow-xl drop-shadow-xl">
                  <SiTailwindcss
                    style={{ color: "#5ed3f3", fontSize: "20px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="lg:flex-1 flex items-center justify-center">
          {/* Background Element */}
          <div className=" bg-bgSecondary h-auto w-auto shadow-neutral-700 shadow-xl rounded-6">
            {/* Container for Image */}
            <div className="flex justify-center items-center">
              {/* Profile Image */}
              <Image src={profile} alt="profile image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
