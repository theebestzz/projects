import React from "react";
import Link from "next/link";

import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", title: "Home", url: "/" },
  { id: 2, name: "About", title: "About", url: "/about" },
  { id: 3, name: "Categories", title: "Categories", subMenu: true },
  { id: 4, name: "Contact", title: "Contact", url: "/contact" },
];

const subMenuData = [
  {
    id: 1,
    name: "Jordan",
    title: "Jordan",
    url: "/category/jordan",
    doc_count: 11,
  },
  {
    id: 2,
    name: "Sneakers",
    title: "Sneakers",
    url: "/category/sneakers",
    doc_count: 8,
  },
  {
    id: 3,
    name: "Running shoes",
    title: "Running shoes",
    url: "/category/running-shoes",
    doc_count: 64,
  },
  {
    id: 4,
    name: "Football shoes",
    title: "Football shoes",
    url: "/category/football-shoes",
    doc_count: 107,
  },
];

const MobileMenu = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  categories,
}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-black border-t text-white">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item.subMenu ? (
              <li
                className="py-4 px-5 border-b flex flex-col relative cursor-pointer"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center group">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="-mx-5 mt-4 -mb-4">
                    {categories?.map(({ attributes: category, id }) => {
                      return (
                        <Link
                          href={`/category/${category.slug}`}
                          key={id}
                          title={category.title}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li
                            className="py-4 px-8 border-t flex justify-between"
                            title={category.title}
                          >
                            {category.name}
                            <span className="opacity-50 text-sm"></span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link
                  href={item.url}
                  title={item.title}
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
