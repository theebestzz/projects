import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

const CartItems = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src="/assets/product-1.jpg"
          width={1720}
          height={2100}
          alt="Nike Sports"
          title="Nike Sports"
          priority={true}
        />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            <Link href="/product/1" target="_blank">
              Jordan Retro 6 G
            </Link>
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            <Link href="/category/men/golf-shoes" target="_blank">
              Men&apos;s Golf Shoes
            </Link>
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            USD : $120
          </div>
        </div>
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          <Link href="/category/men/golf-shoes" target="_blank">
            Men&apos;s Golf Shoes
          </Link>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black transition-all ease-in-out duration-200">
                <option value="1">UK 6</option>
                <option value="2">UK 6.5</option>
                <option value="3">UK 7</option>
                <option value="4">UK 8</option>
                <option value="5">UK 9</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black transition-all ease-in-out duration-200">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
          <RiDeleteBin7Line className="text-black/[0.5] hover:text-black text-[16px] md:text-[20px] cursor-pointer transition-all ease-in-out duration-200" />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
