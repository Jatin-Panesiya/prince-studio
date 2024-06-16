"use client";
import { headerData } from "@/utils/constants";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow-sm bg-white sticky top-0 p-5 flex items-center justify-between">
      <h1 className="capitalize font-poppins-bold tracking-tight text-xl">
        prince studio
      </h1>

      <div className="sm:flex items-center gap-x-5 hidden">
        {headerData.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="hover:text-blue-500 !transition-all !duration-300"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {!isMenuOpen ? (
          <MdOutlineMenu size={25} />
        ) : (
          <MdOutlineClose size={25} />
        )}
      </div>

      {isMenuOpen && (
        <div className="fixed grid left-0 top-20 sm:hidden bg-white shadow-md w-full justify-center gap-y-5 py-5">
          {headerData.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="hover:text-blue-500 !transition-all !duration-300"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;