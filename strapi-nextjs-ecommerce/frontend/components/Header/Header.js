import Link from "next/link";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import React, { useState, useEffect } from "react";
import {
  RiShoppingBag3Line,
  RiHeart3Line,
  RiCloseLine,
  RiMenu3Fill,
} from "react-icons/ri";
import { fetchDataFromApi } from "@/utils/api";

const header = () => {
  const [categories, setCategories] = useState(null);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-2xl");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-all ease-in-out duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img
            src="/assets/logo.svg"
            alt="Shoes Store"
            title="Shoes Store"
            className="w-[50px] md:w-[60px]"
          />
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />
        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}
        <div className="flex items-center gap-2 text-black cursor-pointer">
          <Link href="/whishlist" title="Whishlist">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center relative hover:bg-black hover:text-white transition-all ease-in-out duration-300">
              <RiHeart3Line className="text-[30px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-black absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                <span className="animate-pulse">22</span>
              </div>
            </div>
          </Link>
          <Link href="/cart" title="Cart">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center relative hover:bg-black hover:text-white transition-all ease-in-out duration-300">
              <RiShoppingBag3Line className="text-[30px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-black absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                <span className="animate-pulse">5</span>
              </div>
            </div>
          </Link>
          <div className="w-10 h-10 md:w-12 md:h-12 md:hidden rounded-full flex justify-center items-center relative -mr-2 hover:bg-black hover:text-white transition-all ease-in-out duration-300">
            {mobileMenu ? (
              <RiCloseLine
                className="text-[30px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <RiMenu3Fill
                className="text-[30px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default header;
