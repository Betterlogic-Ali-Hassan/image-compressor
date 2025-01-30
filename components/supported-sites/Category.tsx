import { categories } from "@/constant/linklistData";
import React from "react";

const Category = () => {
  return (
    <div className='mt-14 flex '>
      <ul className='w-1/2 px-4'>
        {categories.slice(0, 4).map((link, i) => (
          <li
            key={i}
            className='link pl-[1.4rem] mb-6 text-base font-medium relative text-[#0073e6]'
          >
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
      <ul>
        {categories.slice(4).map((link, i) => (
          <li
            key={i}
            className='link pl-[1.4rem] mb-6 text-base font-medium relative text-[#0073e6]'
          >
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
