import React from "react";
import Alert from "./Alert";
import { alertData } from "@/constant/alertData";

const Alerts = () => {
  return (
    <div>
      {alertData.map((item, i) => (
        <Alert key={i} title={item.title} icon={item.icon} type={item.title} />
      ))}
    </div>
  );
};

export default Alerts;
