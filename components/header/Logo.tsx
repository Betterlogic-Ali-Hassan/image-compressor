import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href='/'
      className={cn("flex items-center gap-2 mr-[40px]", className)}
    >
      <Image src='/logo.svg' alt='logo' height={36} width={36} />
      <label className='font-bold text-text text-lg'>SaveVideo</label>
    </Link>
  );
};

export default Logo;
