import React from "react";
import heroImg from "../../assets/hero.png";
import { Link } from "react-router";
import playStoreImg from "../../assets/googlePlay.webp"
import appStoreImg from "../../assets/AppStore.jpg"

function Hero() {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center space-y-3 my-5 p-4">
        <h2 className="text-2xl md:text-6xl text-center font-bold">
          We Build <br />{" "}
          <span className="font-bold bg-gradient-to-l from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="text-center text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>
      <div className="my-6 flex items-center gap-6 p-3">
        <Link
          to="https://play.google.com/store/games"
          className="store-link"
        >
            <img src={playStoreImg} alt="" className="w-12"/>
          Google Play
        </Link>
        <Link
          to="https://www.apple.com/app-store/"
          className="store-link"
        >
            <img src={appStoreImg} alt="" className="w-12"/>
         App Store
        </Link>
      </div>
      <div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
