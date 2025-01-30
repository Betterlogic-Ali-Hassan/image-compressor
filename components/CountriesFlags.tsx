import Image from "next/image";

interface CountryFlagProps {
  flagCode: string;
  width?: number;
  height?: number;
  alt?: string;
}

export function CountryFlag({
  flagCode,
  width = 20,
  height = 18,
  alt = "",
}: CountryFlagProps) {
  const flagUrl = `https://flagcdn.com/${flagCode.replace(".png", "")}.svg`;

  return (
    <Image
      src={flagUrl || "/placeholder.svg"}
      width={width}
      height={height}
      alt={alt}
      className='mr-2'
      onError={(e) => {
        e.currentTarget.src = "/placeholder.svg";
      }}
    />
  );
}
