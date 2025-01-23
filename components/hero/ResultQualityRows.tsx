import { quality } from "@/constant/qualityData";
import React from "react";
import ResultQuality from "./ResultQuality";

const ResultQualityRows = () => {
  return (
    <div className='mt-4 '>
      {quality.map((item, i) => (
        <ResultQuality key={i} item={item} />
      ))}
    </div>
  );
};

export default ResultQualityRows;
