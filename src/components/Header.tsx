"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavbar from "./MobileNavbar";
import profile from "../../public/profile.png";

const Header = () => {
  const [navbarVisibility, setNavbarVisibility] = useState(false);
  const toggleVisibility = () => {
    setNavbarVisibility(!navbarVisibility);
  };
  return (
    <div>
      <div
        className={`${
          navbarVisibility ? "opacity-30 -z-0" : ""
        } flex my-5 xl:my-8 px-5 sm:px-9 xl:px-12 items-center justify-between`}
      >
        {/* logo  */}
        <div className="flex shrink-0">
          <Link href={"/"}>
            <Image
              src={profile}
              alt="profile image"
              className="rounded-full h-14 xl:h-20 w-14 xl:w-20"
            />
          </Link>
        </div>
        {/* main menu navigation */}
        <div className=" flex text-sm xl:text-lg items-center">
          {/* left menu */}
          <div className="hidden lg:flex space-x-8 xl:space-x-16 mr-5">
            <div>
              <Link className="text-offWhite hover:text-white" href={"/"}>
                HOME
              </Link>
            </div>
            <Link href={"/"} className="text-offWhite hover:text-white">
              FEATURES
            </Link>
            <Link href={"/"} className="text-offWhite hover:text-white">
              PORTFOLIO
            </Link>
            <Link href={"/"} className="text-offWhite hover:text-white">
              RESUME
            </Link>
            <Link href={"/"} className="text-offWhite hover:text-white">
              BLOG
            </Link>
          </div>
          <div>
            {/* right side red button */}
            <div className="hidden lg:block">
              <Link href={"/"}>
                <button className=" bg-bgPrimary hover:bg-bgSecondary py-2 xl:py-3 px-3 xl:px-4 text-red rounded-sm font-medium text-base shadow-combined transition duration-500  hover:-translate-y-1">
                  {" "}
                  CONTACT
                </button>
              </Link>
            </div>
            {/* hamburger button for mobile devices */}
            <button className="lg:hidden" onClick={toggleVisibility}>
              <span>
                <RxHamburgerMenu style={{ fontSize: "30px", color: "red" }} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <MobileNavbar
        isVisible={navbarVisibility}
        setToggleVisibility={toggleVisibility}
      />
    </div>
  );
};

export default Header;
