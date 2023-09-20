import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex my-3 mx-9 items-center justify-between">
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
          <div className="flex space-x-3 mr-3">
            <Link href={"/"}>HOME</Link>
            <Link href={"/"}>PORTFOLIO</Link>
            <Link href={"/"}>RESUME</Link>
            <Link href={"/"}>BLOG</Link>
          </div>
          {/* right side red button */}
          <div>
            <Link href={"/"}>
              <button className=" bg-bgPrimary hover:bg-bgSecondary py-2 px-3 text-red rounded-sm font-medium shadow-combined transition duration-500  hover:-translate-y-1">
                {" "}
                CONTACT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
