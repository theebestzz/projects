import React from "react";
import Wrapper from "@/components/Header/Wrapper";
import Link from "next/link";
import { RiCheckboxCircleLine } from "react-icons/ri";

const Success = () => {
  return (
    <div className="min-h-[650px] flex items-center text-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="flex items-center justify-center p-5 animate-pulse">
            <RiCheckboxCircleLine className="text-[#00bf0f]" size={50} />
          </div>
          <div className="text-2xl font-bold">Thanks for shopping with us!</div>
          <div className="text-lg font-bold mt-2">
            Your order has been placed successfully.
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email to
          </div>
          <div className="underline">shoeshopcontact@shop.com</div>
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
};

export default Success;
