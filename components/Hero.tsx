"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-screen">
      <div className=" flex flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div className=" w-full md:w-1/2 flex flex-col justify-center lg:ml-[130px] mt-8 lg:mt-[20px] px-4">
          <h1 className="font-LibreBodoni  font-bold text-[24px] lg:text-[40px] w-full lg:w-[496px] tracking-wider leading-8 lg:leading-[65px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="font-LibreBodoni text-[#787054] font-medium text-[16px] lg:text-[20px] w-full lg:w-[555px] tracking-normal mt-3 lg:mt-5 leading-8">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <Link href="/">
            <button className="font-LibreBodoni text-white bg-[#787054] w-[150px] lg:w-[200px] h-[40px] px-[8px] py-[7px] rounded-md mt-6 lg:mt-8 font-medium text-[16px] lg:text-[20px]">
              Explore Now
            </button>
          </Link>
        </div>
        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-[50px] mr-0 lg:mr-[10]">
          <Image src={"/hero-pic.png"} alt="Image" width={380} height={525} className="w-[80%] lg:w-[390px]
           h-auto"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
