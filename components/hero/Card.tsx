import { cn } from "@/lib/utils";
import React from "react";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-[30px] border border-primary-border card-shadow rounded-[16px] mt-[60px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
