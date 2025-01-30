import React from "react";
import Category from "./Category";
import VisitVisa from "./VisitVisa";

const SupportedSites = () => {
  return (
    <div className='pt-[52px]'>
      <div className='hero-container'>
        <span className='text-[#a1a1a1] leading-[2.4rem] text-[26px] tracking-tight mb-2 block'>
          Getting a visa
        </span>
        <h1 className='text-left text-[47px] leading-[52px]'>Visa list</h1>
        <p className='text-[17px] mt-3'>
          This is a list of Australian visas. If you are unsure which visa is
          right for you use our Visa Finder.
        </p>
        <Category />
        <hr className='my-[30px] border-[#e4e4e4]' />
        <VisitVisa name='Visitor visas' items={1} />
        <VisitVisa name='Studying and training visas' items={4} />
        <VisitVisa name='Family and partner visas' />
        <VisitVisa name='Working and skilled visas' items={3} />
        <VisitVisa name='Refugee and humanitarian visas' items={5} />
        <VisitVisa name='Other visas' items={2} />
        <VisitVisa name='Repealed visas' />
      </div>
    </div>
  );
};

export default SupportedSites;
