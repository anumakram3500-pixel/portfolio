import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const contactusHandler = () => {
    console.log("click");
    navigate("/contact");
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full h-[250px] bg-black flex flex-col justify-around items-center">
        <div className=" flex flex-col justify-around gap-8 items-center">
          <div className="flex flex-col gap-2 items-center justify-center ">
            <FaAngleDoubleUp
              className="cursor-pointer animate-bounce"
              onClick={scrollTop}
              color="white"
            />

            <button className="text-white text-[14px] font-bold tracking-[8px] ">
              BACK TO TOP
            </button>
          </div>

          <div className=" w-[250px] flex justify-around items-center">
            <div>
              <FaFacebookSquare
                className="cursor-pointer"
                color="white"
                size={30}
              />
            </div>
            <div>
              <SiInstagram className="cursor-pointer" color="white" size={30} />
            </div>
            <div>
              <FaLinkedin className="cursor-pointer" color="white" size={30} />
            </div>
            <div>
              <a href="mailto:anumakram3500@gmail.com">
                <AiOutlineMail
                  className="cursor-pointer"
                  color="white"
                  size={30}
                />
              </a>
            </div>
          </div>

          <div>
            <p className="text-white">
              <strong className="text-1xl">@2025 Anum Akram</strong> All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
