import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto cursor-pointer">
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[30px] md:right-[50px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 transition-all ease-in-out duration-500"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90 transition-all ease-in-out duration-500"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <Image
            src="/assets/slide-1.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
            width={1200}
            height={525}
            alt="Shoes Store"
            title="Shoes Store"
            priority={true}
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-300">
            <Link href="/">Shop now</Link>
          </div>
        </div>
        <div>
          <Image
            src="/assets/slide-2.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
            width={1200}
            height={525}
            alt="Shoes Store"
            title="Shoes Store"
            priority={true}
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-300">
            <Link href="/">Shop now</Link>
          </div>
        </div>
        <div>
          <Image
            src="/assets/slide-3.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
            width={1200}
            height={525}
            alt="Shoes Store"
            title="Shoes Store"
            priority={true}
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-300">
            <Link href="/">Shop now</Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
