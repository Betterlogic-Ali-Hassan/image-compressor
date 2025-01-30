import { categories } from "@/constant/linklistData";
import React from "react";

const VisitVisa = ({ name, items = 0 }: { name?: string; items?: number }) => {
  return (
    <div className='mt-10'>
      <h2 className='text-[30px] text-left'>{name}</h2>
      <ul className='list-disc pl-[1.4rem] marker:text-text my-8'>
        {categories.slice(items).map((link, i) => (
          <li
            key={i}
            className=' text-[17px] relative font-normal text-[#0073e6]'
          >
            <a href={link.url} className='underline'>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitVisa;
