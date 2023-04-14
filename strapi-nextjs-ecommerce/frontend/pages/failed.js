import React from "react";
import Wrapper from "@/components/Header/Wrapper";
import Link from "next/link";
import { RiCloseCircleLine } from "react-icons/ri";

const Failed = () => {
  return (
    <div className="min-h-[650px] flex items-center text-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="flex items-center justify-center p-5 animate-pulse">
            <RiCloseCircleLine className="text-[#f00]" size={50} />
          </div>
          <div className="text-2xl font-bold text-[#f00] animate-pulse">
            Payment failed!
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

export default Failed;
