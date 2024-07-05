"use client";
import { headerData } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="bg-dark sticky z-[100] top-0">
    <div className="shadow-sm bg-[#1b1b1b] text-white !py-7 flex items-center justify-between top-container">
      <h1 className="uppercase font-poppins-bold tracking-tight text-xl text-slate-100 hidden">
        prince studio
      </h1>
      <Image src="/Images/logo.png" alt="logo" width={130} height={130} />
      {/* Desktop */}
      <div className="sm:flex items-center gap-x-5 hidden">
        {headerData.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={`hover:text-primary ${
              pathname === item.link && "text-primary"
            } !transition-all !duration-300`}
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

      {/* Mobile */}
      {isMenuOpen && (
        <div className="fixed grid text-center left-0 top-[108px] sm:hidden bg-[#1b1b1b] shadow-md w-full justify-center gap-y-5 py-5">
          {headerData.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setIsMenuOpen(false)}
              className={`hover:text-primary ${
                pathname === item.link && "text-primary"
              } !transition-all !duration-300`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Header;
