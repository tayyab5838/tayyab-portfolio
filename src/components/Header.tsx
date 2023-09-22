"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [navbarVisibility, setNavbarVisibility] = useState(false);
  console.log(`from header  ${navbarVisibility}`);
  const toggleVisibility = () => {
    setNavbarVisibility(!navbarVisibility);
    console.log(navbarVisibility);
  };
  return (
    <div>
      <div
        className={`${
          navbarVisibility ? "opacity-30 -z-0" : ""
        } flex my-5 mx-9 items-center justify-between`}
      >
        {/* logo  */}
        <div>
          <Link href={"/"}>
            <Image
              src={"/profile.png"}
              height={40}
              width={40}
              alt="profile image"
              className="rounded-full"
            />
          </Link>
        </div>
        {/* main menu navigation */}
        <div className="text-offWhite flex text-xs items-center">
          {/* left menu */}
          <div className="hidden sm:flex space-x-3 mr-3">
            <Link href={"/"}>HOME</Link>
            <Link href={"/"}>PORTFOLIO</Link>
            <Link href={"/"}>RESUME</Link>
            <Link href={"/"}>BLOG</Link>
          </div>
          <div>
            {/* right side red button */}
            <div className="hidden sm:block">
              <Link href={"/"}>
                <button className=" bg-bgPrimary hover:bg-bgSecondary py-2 px-3 text-red rounded-sm font-medium shadow-combined transition duration-500  hover:-translate-y-1">
                  {" "}
                  CONTACT
                </button>
              </Link>
            </div>
            {/* hamburger button for mobile devices */}
            <button className="sm:hidden" onClick={toggleVisibility}>
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
