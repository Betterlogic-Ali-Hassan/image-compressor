import { cn } from "@/lib/utils";
import Image from "next/image";

interface CountryFlagProps {
  flagCode: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

export function CountryFlag({
  flagCode,
  width = 26,
  height = 28,
  alt = "",
  className,
}: CountryFlagProps) {
  const flagUrl = `https://flagcdn.com/${flagCode.replace(".png", "")}.svg`;

  return (
    <Image
      src={flagUrl || "/placeholder.svg"}
      width={width}
      height={height}
      alt={alt}
      className={cn(" border", className)}
      onError={(e) => {
        e.currentTarget.src = "/placeholder.svg";
      }}
    />
  );
}
