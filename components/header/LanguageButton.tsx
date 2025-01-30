import type React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CountryFlag } from "../CountriesFlags";

interface LanguageButtonProps {
  name: string;
  flag: string;
  isSelected: boolean;
  onClick: () => void;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({
  name,
  flag,
  isSelected,
  onClick,
}) => (
  <Button
    onClick={onClick}
    variant='outline'
    className={cn(
      "flex items-center gap-1 rounded-[6px] border-border hover:bg-foreground ",
      isSelected && "bg-text text-background hover:bg-text"
    )}
  >
    <CountryFlag flagCode={flag} />
    <span className='text-xs'>{name}</span>
  </Button>
);
