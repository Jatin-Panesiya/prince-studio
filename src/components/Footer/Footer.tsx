import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  const phoneNumber = "9824383396";
  const message = "Hello, I would like to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="bg-slate-100 py-10 max-sm:py-5">
      <div className="top-container grid grid-cols-3 items-center gap-5 max-md:grid-cols-2 max-[500px]:grid-cols-1">
        <div className="h-20 flex flex-col justify-center">
          <h1 className="uppercase font-poppins-bold tracking-tight text-xl">
            prince studio
          </h1>
          <p>Your Vision, Our Expertise</p>
        </div>
        <div>
          <p className="font-merry-bold py-2">Follow Us</p>
          <div className="flex items-center gap-1">
            <a
              href="https://www.instagram.com/studioprince_official?igsh=czJjMmJkcXZwbnZ3"
              target="_blank"
            >
              <AiFillInstagram
                size={25}
                color="#DD2a7b"
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.facebook.com/chandresh.chavda.146/"
              target="_blank"
            >
              <BiLogoFacebookCircle
                size={25}
                color="blue"
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://youtube.com/@studioprinceofficial4827?si=rZsWXUMdYWlGh3DG"
              target="_blank"
            >
              <FaYoutube size={25} color="red" className="cursor-pointer" />
            </a>
            <a href={whatsappUrl} target="_blank">
              <IoLogoWhatsapp
                size={25}
                color="green"
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div>
          <p className="font-merry-bold py-2">Call us</p>
          <a href="tel:9824383396">+91 9824383396</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;