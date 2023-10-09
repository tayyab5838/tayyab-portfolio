"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

const MobileNavbar = (props: any) => {
  const { isVisible, setToggleVisibility } = props;

  return (
    <div>
      <div className="absolute top-0 w-3/5 sm:w-2/5 h-full">
        <div
          className={`lg:hidden  ${
            isVisible
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          }   px-7 py-6 bg-bgSecondary transition-all duration-700 relative z-10`}
        >
          {/*upper portion of navbar  */}
          <div className="border-b border-offWhite">
            <div className="flex justify-between items-center">
              {/* logo image */}
              <div>
                <Image
                  src={"/profile.png"}
                  height={50}
                  width={50}
                  alt="profile image"
                  className="rounded-full"
                />
              </div>
              {/* cross icon */}
              <div>
                <div className="h-12 w-12 rounded-full bg-[#27292a] absolute right-4 top-6"></div>
                <span
                  className="relative cursor-pointer"
                  onClick={setToggleVisibility}
                >
                  <RxCross1 style={{ color: "red", fontSize: "25px" }} />
                </span>
              </div>
            </div>
            <p className="my-6 text-offWhite  ">
              This is a portfolio website for personel use
            </p>
          </div>
          {/*middle portion of navbar  */}
          <div className="mt-8 mb-32">
            <div className="flex flex-col space-y-8 text-white text-sm font-semibold bg-bgSecondary">
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>FEATURES</Link>
              <Link href={"/"}>PORTFOLIO</Link>
              <Link href={"/"}>RESUME</Link>
              <Link href={"/"}>BLOG</Link>
              <Link href={"/"}>CONTACT</Link>
            </div>
          </div>
          {/* lower portion of navbar */}
          <div className="border-t">
            <h2 className="text-white font-semibold mb-6 mt-6">FIND WITH ME</h2>
            <div className="flex space-x-3">
              <div className="bg-[#27292a] py-3 px-4 h-fit w-fit">
                <FiLinkedin style={{ color: "#c4cfde", fontSize: "20px" }} />
              </div>
              <div className="bg-[#27292a] py-3 px-4 h-fit w-fit">
                <FiTwitter style={{ color: "#c4cfde", fontSize: "20px" }} />
              </div>
              <div className="bg-[#27292a] py-3 px-4 h-fit w-fit">
                <FiGithub style={{ color: "#c4cfde", fontSize: "20px" }} />
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default MobileNavbar;
