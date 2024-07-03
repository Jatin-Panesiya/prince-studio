import { Divider } from "@mantine/core";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="top-container bg-slate-100 !py-20 max-sm:!py-10 flex max-[900px]:flex-col-reverse max-[900px]:gap-y-10 items-center justify-between">
      <div className="space-y-5">
        <div className="max-w-[600px] space-y-5">
          <p className="font-merry-bold text-3xl leading-10 tracking-wide max-sm:text-xl">
            Hello, I'm Chandresh Chavda, a Wedding photographer from Gujarat.
          </p>
          <p className="text-base text-gray-600 max-sm:text-sm max-sm:leading-6">
            I love capturing the vibrant, joyful, and genuine moments of life,
            turning them into timeless stories. Each photograph tells a unique
            tale, preserving the emotions and memories for generations to come.
            Passionate about my craft, I strive to bring out the beauty and
            essence in every frame.
          </p>

          <div className="text-base text-gray-600 grid gap-y-3">
            <span className="flex items-center gap-3">
              <IoCheckmarkDoneCircleSharp size={35} className="text-black" />
              <p>Over 15 years of experience</p>
            </span>
            <span className="flex items-center gap-3">
              <IoCheckmarkDoneCircleSharp size={35} className="text-black" />
              <p>200+ successfully executed projects</p>
            </span>
            <span className="flex items-center gap-3">
              <IoCheckmarkDoneCircleSharp size={35} className="text-black" />
              <p>Exceptional work quality</p>
            </span>
          </div>
        </div>

        <Divider />

        <div className="text-base flex items-center gap-10 max-sm:gap-7">
          <div>
            <p>Signature</p>
          </div>
          <div>
            <h1 className="text-xl capitalize max-sm:text-lg">
              chandresh chavda
            </h1>
            <div className="text-[13px] flex items-center gap-x-1">
              Founder of{" "}
              <h1 className="text-primary text-base inline font-poppins-bold capitalize">
                prince studio
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10">
        <Image
          src="/Images/chandresh.jpg"
          width={390}
          height={470}
          className="hover:scale-95 min-w-[390px] min-h-[470px] max-sm:min-w-0 max-sm:min-h-0 transition-all duration-500 rounded shadow-2xl shadow-primary/20"
          alt="Chandresh Chavda"
        />
        {/* <div className="bg-[#1b1b1b] w-[380px] right-3 -bottom-7 -z-10 h-[450px] absolute rounded" /> */}
      </div>
    </div>
  );
};

export default Introduction;
