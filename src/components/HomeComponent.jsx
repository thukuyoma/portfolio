import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";

const HomeComponent = () => {
  
  return (
    <div className="flex flex-col items-center gap-4 md:gap-7">
      <div className="w-[120px] md:w-[200px] relative h-[120px] md:h-[200px]  rounded-full overflow-hidden  ">
        <Image src={"/1.png"} fill className="object-cover bg-[#FFFFEE] border-none border-[#FFFFEE] " />
      </div>

      <div className="relative">
        <h1 className="capitalize font-extrabold text-3xl md:text-5xl text-[#9279ac] ">
          theophilus ukuyoma{" "}
        </h1>
        <h1 className="capitalize font-extrabold text-3xl md:text-5xl absolute -left-[2px] -top-[1px] ">
          theophilus ukuyoma{" "}
        </h1>
      </div>

      <div className=" px-10 md:w-[60%]   text-center">
      
          Co-founder and CTO at
          <span className="relative mx-1">
            <span className="capitalize font-bold text-[#9279ac]">Entobo</span>{" "}
            <span className="capitalize ext-lg  font-bold text-black absolute -left-[1px] -top-[1px]">
              Entobo
            </span>{" "}
          </span>{" "}
          &{" "}
          <span className="relative ml-1">
            <span className="capitalize font-bold text-[#9279ac]">goziri</span>{" "}
            <span className="capitalize ext-lg  font-bold text-black absolute -left-[1px] -top-[1px]">
              Goziri
            </span>{" "}
          </span>
          . Experienced Full Stack{" "}
        
      
          Developer in Node.js, JavaScript,{" "}
          <span className="font-light textlg">.NET</span>, and{" "}
          <span className="font-light textlg">C#</span> Azre Architect and{" "}
        
   
          DevOps Engineer. Passionate about innovative, scalable solutions{" "}
      
      and enchancing user experiences. 
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="bg-black text-white py-2 px-4 rounded-[40px] flex gap-2  items-center">
          <CiMail className="font-semibold text-xl" />
          <h3 className="text-base font-light">
            theophilus.ukuyoma@entobo.com
          </h3>
        </div>
        <div className="flex items-center  gap-2">
          <div className="text-black flex gap-1 items-center">
            <FaGithub className="text-xl" />
            <IoLogoFacebook className="text-xl" />
            <IoLogoLinkedin className="text-xl" />
            <FaXTwitter className="text-xl" />
            <RiInstagramFill className="text-xl" />
          </div>
          <div className="flex items-center gap-[1px] ">
            <div className="w-[12px] h-[12px] bg-black rounded-full" />
            <div className="w-[5px] h-[12px] bg-black  rounded-3xl" />
            <div className="w-[2px] h-[12px] bg-black rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
