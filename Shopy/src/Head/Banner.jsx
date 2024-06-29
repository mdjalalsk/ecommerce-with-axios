import backgroundImage from "../assets/backgroundImage.png";
import { useEffect } from "react";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${backgroundImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="relative w-full max-w-[90%] xs:max-w-full flex 
      items-center justify-between pt-5 xs:pt-10 mx-auto px-4 xs:px-6"
      >
        {/* nav  */}
        <Navbar></Navbar>
      </div>
      {/* Banner text  */}
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-center mt-8 md:mt-28 "
      >
        <h1 className="text-2xl font-bold  md:text-3xl leading-tight max-w-xs xs:max-w-[500px]">
       <span className="text-xl xs:text-4xl">The best tablet Collection 2023.</span>
        </h1>
        <h5 className="mt-3 xs:mt-6 text-lg xs:text-xl max-w-xs xs:max-w-[500px]">
        Exclusive offer  40% off this week
        </h5>
        <div className="relative w-full xs:w-[300px] mt-6 xs:mt-11">
          <button type="button" className="text-base  xs:text-2xl text-white px-3 py-2 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ml-2 xs:ml-5">
            Shop Now
          </button>
        </div>
      </div>
    </div>

  )
}
