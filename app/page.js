"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import "fontsource-metropolis";
import CircularCharts from "./CircularChart";

export default function Home() {
  return (
    <div>
      <div className="pt-6 mx-2 max-w-[480px] md:mx-auto">
        <div className="flex justify-between">
          <div className="w-[60px] h-[60px] bg-gray-200 rounded-full flex items-center justify-center">
            <FaArrowLeft />
          </div>
          <div>
            <Image
              src={"/avatar_image.svg"}
              width="60"
              height="60"
              alt="avatarIcon"
            />
          </div>
        </div>
        <p
          className="text-[36px] font-black text-[#2F2F2F] mt-4"
          style={{ fontFamily: "Metropolis-bold" }}
        >
          Your{" "}
        </p>
        <p
          className="text-[36px] font-black text-[#2F2F2F] leading-[30px]"
          style={{ fontFamily: "Metropolis-bold" }}
        >
          Fitness Tracker
        </p>

        <div
          className="mt-4 flex"
          style={{ fontFamily: "Metropolis-semibold" }}
        >
          <button className="bg-[#FF6020] rounded-full text-white w-[251px] h-[60px] flex justify-center items-center text-[20px] font-semibold">
            Connected Devices
          </button>
          <button className="ml-4 bg-[#F2F2F2] rounded-full  h-[60px] flex justify-center items-center text-[20px] px-4 text-gray-400">
            Statistics
          </button>
        </div>
        {/* card section */}
        <div className=" mt-[80px] rounded-[40px] relative">
          <div className="z-[2] flex justify-center absolute top-[-37px] left-1/2 transform -translate-x-1/2">
            <div className="bg-[#FFE3D8] pt-4 rounded-[30px] h-[100px] min-[320px]:w-[258px] min-[375px]:w-[286px] min-[425px]:w-[352px] max-w-[428px]   md:w-[428px]"></div>
          </div>
          {/* bg-layer-2 */}
          <div className="z-[2] flex justify-center absolute top-[-20px] left-1/2 transform -translate-x-1/2 ">
            <div className="bg-[#FFBFA6] pt-4 rounded-[35px] h-[100px]  min-[320px]:w-[284px] min-[375px]:w-[326px] min-[425px]:w-[388px] md:w-[458px]"></div>
          </div>
          {/* main card */}
          <div className="z-[3] shadow-2xl relative w-full h-[286px] rounded-[40px]  flex  justify-between overflow-visible bg-[#2F2F2F]">
            <div className="relative top-6 left-6 ">
              <p
                className="text-[#FF8250] text-[13px]"
                style={{ fontFamily: "Metropolis-semibold" }}
              >
                Smart Watch
              </p>
              <p
                className="text-white text-[26px] leading-[20px] mt-2"
                style={{ fontFamily: "Metropolis-bold" }}
              >
                Fire Boltt
              </p>
              <p
                style={{ fontFamily: "Metropolis-regular" }}
                className="text-[12px] text-gray-500 mt-[80px]"
              >
                scan the device
              </p>
              <p
                style={{ fontFamily: "Metropolis-regular" }}
                className="text-[12px] text-gray-500"
              >
                QR code connect
              </p>
              <button
                className="z-[2] mt-6 rounded-full text-white bg-[#FF6020] h-[49px] w-[127px] px-4 flex items-center justify-center  text-[20px]"
                style={{ fontFamily: "Metropolis-bold" }}
              >
                Scan
              </button>
            </div>
            <div className="overflow-visible rounded-[40px]">
              <Image
                src={"/watchPhoto.svg"}
                width="322"
                height="322"
                alt="watchphoto"
                className="relative top-[-10px] md:top-[-30px] z-[2] scale-y-105 md:scale-100"
              />
            </div>
          </div>
        </div>
        {/* card blur effect */}
        <div className="flex justify-center relative bottom-[18px] z-[1]  h-[75px] rounded-full blur-3xl bg-[#2F2F2F]">
          <div className=" "></div>
        </div>
        {/* steps and calorie div */}
        <div className=" flex gap-2 justify-evenly">
          <CircularCharts />
          <div className="flex flex-col w-1/2">
            {/* calorie div */}
            <div className="h-[81px] bg-[#FFF4EF] flex flex-col justify-center items-center rounded-full mb-4">
              <p
                className="text-[#FF8250] text-[13px]"
                style={{ fontFamily: "Metropolis-semibold" }}
              >
                Calories
              </p>
              <p
                className="text-[#2F2F2F] text-[20px]"
                style={{ fontFamily: "Metropolis-bold" }}
              >
                1200 Kcal
              </p>
            </div>
            {/* water intake div */}
            <div className="h-[81px] bg-[#FFF4EF] flex flex-col justify-center items-center rounded-full ">
              <p
                className="text-[#FF8250] text-[13px] "
                style={{ fontFamily: "Metropolis-semibold" }}
              >
                Water
              </p>
              <p
                className="text-[#2F2F2F] text-[20px] "
                style={{ fontFamily: "Metropolis-bold" }}
              >
                1.8 Ltrs
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* add details form  */}
      <div className="p-4 rounded-tl-[50px] rounded-tr-[50px] bg-[#FF6020] h-[510px] mt-10 flex flex-col justify-evenly md:mx-auto max-w-[480px]">
        <p
          className="text-white text-[20px]"
          style={{ fontFamily: "Metropolis-semibold" }}
        >
          Add Details
        </p>
        <input
          type="text"
          placeholder="Name"
          className="h-[50px] rounded-full text-[14px] focus:outline-none focus:border-none px-4"
          style={{ fontFamily: "Metropolis-extrabold" }}
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="age"
            className="h-[50px] w-[45%] rounded-full text-[14px] px-4 focus:outline-none focus:border-none"
            style={{ fontFamily: "Metropolis-extrabold" }}
          />
          <input
            type="text"
            placeholder="Height"
            className="h-[50px] w-[55%] rounded-full text-[14px] px-4 focus:outline-none focus:border-none"
            style={{ fontFamily: "Metropolis-extrabold" }}
          />
        </div>
        <input
          type="text"
          placeholder="Are you a gym member?"
          className="h-[50px] rounded-full text-[14px] px-4 placeholder:text-[#2F2F2F] focus:outline-none focus:border-none"
          style={{ fontFamily: "Metropolis-extrabold" }}
        />
        <input
          type="text"
          placeholder="Do you eat meat?"
          className="h-[50px] rounded-full text-[14px] px-4 placeholder:text-[#2F2F2F] focus:outline-none focus:border-none"
          style={{ fontFamily: "Metropolis-extrabold" }}
        />
        <input
          type="text"
          placeholder="Are you a cyclist?"
          className="h-[50px] rounded-full text-[14px] px-4 placeholder:text-[#2F2F2F] focus:outline-none focus:border-none"
          style={{ fontFamily: "Metropolis-extrabold" }}
        />
        <button
          className="bg-[#2F2F2F] flex justify-center items-center text-white text-[20px] rounded-full h-[60px]"
          style={{ fontFamily: "Metropolis-bold" }}
        >
          Save Details
        </button>
      </div>
    </div>
  );
}
