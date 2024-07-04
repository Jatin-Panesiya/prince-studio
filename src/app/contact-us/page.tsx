import React from "react";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { MdOnlinePrediction } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="top-container !py-20 max-sm:py-10">
      <h3 className="text-4xl text-primary font-merry-bold">Contact Us</h3>
      <div className="mt-10 grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <div className="max-w-[600px] space-y-7 bg-primary/20 p-5 rounded-md">
          <div className="flex items-center gap-3 max-w-[500px]">
            <div>
              <LuMapPin size={25} />
            </div>
            <p className="max-[330px]:text-sm">
              Nilraj school pase, Shyam kiran park, Bhavnagar highway, luckyraj
              party plot pachhal, Manda Dungar Main Rd, Rajkot, Gujarat 360002
            </p>
          </div>

          <div className="flex items-center gap-3 max-w-[500px]">
            <div>
              <LuPhone size={25} />
            </div>
            <p className="max-[330px]:text-sm">+91 9824383396</p>
          </div>

          <div className="flex items-center gap-3 max-w-[500px]">
            <div>
              <LuMail size={25} />
            </div>
            <p className="max-[330px]:text-sm min-w-40 break-words">chandreshchavda95@gmail.com</p>
          </div>

          <div className="flex items-center gap-3 max-w-[500px]">
            <div>
              <MdOnlinePrediction size={25} />
            </div>
            <p className="max-[330px]:text-sm min-w-40 break-words">
              https://prince-studio.vercel.app
            </p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14768.057574163306!2d70.8564437!3d22.2774446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5bde8b3ec37%3A0x87fa41e5dfb992ae!2sPrince%20studio%20rajkot!5e0!3m2!1sen!2sin!4v1720082671133!5m2!1sen!2sin"
          className="max-w-[600px] h-[440px] w-full"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
