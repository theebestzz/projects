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

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item.subMenu ? (
              <li
                className="flex items-center gap-2 relative group cursor-pointer"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown
                  className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                  size={14}
                />
                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] text-black shadow-lg">
                    {categories?.map(({ attributes: category, id }) => {
                      return (
                        <Link
                          href={`/category/${category.slug}`}
                          key={id}
                          title={category.title}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="h-14 w-full flex items-center justify-center rounded-sm hover:bg-black hover:text-white transition-all ease-in-out duration-300">
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
              <li className="hover:text-gray-500 transition-all ease-in-out duration-300">
                <Link href={item.url} title={item.title}>
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

export default Menu;
