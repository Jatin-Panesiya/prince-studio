import { Divider } from "@mantine/core";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="top-container !py-20 flex items-center justify-between">
      <div className="space-y-5">
        <div className="max-w-[600px] space-y-5">
          <p className="font-merry-bold text-3xl leading-10 tracking-wide">
            Hello, I'm Chandresh Chavda, a professional photographer based on
            Rajkot
          </p>
          <p className="text-base text-gray-600">
            I love to pause the wild, happy and real moments of life, just to
            hear their stories untold. Viverra tristique usto duis vitae diam
            neque nivamus estan ateuene artines viverra nec setlie no curabit
            tristique.
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

        <div className="text-base flex items-center gap-10">
          <div>
            <p>Signature</p>
          </div>
          <div>
            <p className="text-xl">Chandresh Chavda</p>
            <p className="text-[13px]">Founder of Prince Studio</p>
          </div>
        </div>
      </div>

      <div className="px-10">
        <Image
          src="/Images/face.jpg"
          width={390}
          height={470}
          className="hover:scale-95 min-w-[390px] h-[470px] transition-all duration-500 rounded shadow-2xl shadow-black"
          alt="Chandresh Chavda"
        />
        {/* <div className="bg-[#1b1b1b] w-[380px] right-3 -bottom-7 -z-10 h-[450px] absolute rounded" /> */}
      </div>
    </div>
  );
};

export default Introduction;
