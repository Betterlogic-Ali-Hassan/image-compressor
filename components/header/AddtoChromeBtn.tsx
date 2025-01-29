import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddtoChromeBtn = ({ className }: { className?: string }) => {
  return (
    <Link href='#' className={cn("btn ml-6  ", className)}>
      <span>
        <Image src='/chrome.webp' alt='Chrome' height={26} width={26} />
        Add to Chrome
      </span>
    </Link>
  );
};

export default AddtoChromeBtn;
