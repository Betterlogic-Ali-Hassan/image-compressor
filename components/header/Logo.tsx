import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href='/'
      className={cn(
        "flex items-center gap-2 font-bold text-text text-lg mr-3",
        className
      )}
    >
      <Image src='/logo.svg' alt='logo' height={36} width={36} />
      SaveVideo
    </Link>
  );
};

export default Logo;
