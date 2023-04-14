import CartItems from "@/components/Cart/CartItems";
import Wrapper from "@/components/Header/Wrapper";
import EmptyCartIcon from "@/components/Icons/EmptyCartIcon";
import Link from "next/link";
import React from "react";

export default function cart() {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <CartItems />
            <CartItems />
            <CartItems />
          </div>
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black">
                  SubTotal
                </div>
                <div className="text-md md:text-lg font-medium text-black">
                  $1000
                </div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </div>
            </div>
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 ease-in-out duration-300">
              Checkout
            </button>
          </div>
        </div>

        {/* empty cart */}
        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <EmptyCartIcon />
          <span className="text-xl font-bold mt-5">Your cart is empty</span>
          <span className="text-center mt-5">
            is simply dummy text of the printing and typesetting industry.
            <br />
            is simply dummy text of the printing and typesetting industry.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 md-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}
