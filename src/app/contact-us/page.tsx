import { Divider } from "@mantine/core";
import React from "react";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { MdOnlinePrediction } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <div className="top-container relative bg-dark bg-[url('/Images/bgContact.png')] bg-cover bg-center min-h-[calc(100vh-500px)] items-center text-white !py-20 max-sm:py-10">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="max-w-[500px] relative z-10 my-20 max-sm:my-10">
          <p className="text-4xl text-primary font-merry-bold">Contact Us</p>
          <Divider className="my-2" />
          <p>Contact us ....</p>
        </div>
      </div>

      <div className="top-container !py-20 max-sm:py-10">
        <p className="font-poppins-bold text-xl">Information</p>
        <div className="mt-10 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="max-w-[600px] space-y-7">
            <div className="flex items-center gap-3 max-w-[500px]">
              <div>
                <LuMapPin size={25} />
              </div>
              <p className="max-[330px]:text-sm">
                <a
                  target="_blank"
                  href="https://www.google.com/maps?ll=22.277445,70.856444&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=9798216394854732462"
                  className="hover:text-blue-500 transition-all duration-150"
                >
                  Nilraj school pase, Shyam kiran park, Bhavnagar highway,
                  luckyraj party plot pachhal, Manda Dungar Main Rd, Rajkot,
                  Gujarat 360002
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 max-w-[500px]">
              <div>
                <LuPhone size={25} />
              </div>
              <p className="max-[330px]:text-sm">
                <a
                  href="tel:9824383396"
                  className="hover:text-blue-500 transition-all duration-150"
                >
                  +91 9824383396
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 max-w-[500px]">
              <div>
                <LuMail size={25} />
              </div>
              <p className="max-[330px]:text-sm min-w-40 break-words">
                <a
                  href="mailto:chandreshchavda95@gmail.com"
                  className="hover:text-blue-500 transition-all duration-150"
                >
                  chandreshchavda95@gmail.com
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 max-w-[500px]">
              <div>
                <MdOnlinePrediction size={25} />
              </div>
              <p className="max-[330px]:text-sm min-w-40 break-words">
                <a
                  target="_blank"
                  href="https://prince-studio.vercel.app"
                  className="hover:text-blue-500 transition-all duration-150"
                >
                  https://prince-studio.vercel.app{" "}
                </a>
              </p>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14768.057574163306!2d70.8564437!3d22.2774446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5bde8b3ec37%3A0x87fa41e5dfb992ae!2sPrince%20studio%20rajkot!5e0!3m2!1sen!2sin!4v1720082671133!5m2!1sen!2sin"
              className="h-[280px] w-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
