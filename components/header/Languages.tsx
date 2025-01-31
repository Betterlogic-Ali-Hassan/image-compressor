"use client";
import type React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { X } from "lucide-react";
import { LanguageButton } from "./LanguageButton";
import { LANGUAGES } from "@/constant/SettingsData";
import { useSettings } from "@/context/SettingContext";
import { CountryFlag } from "../CountriesFlags";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Languages: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  const { selectedLanguage, setSelectedLanguage } = useSettings();
  const [selectedFlag, setSelectedFlag] = useState("gb");

  const handleLanguageChange = (newLanguage: string, flag: string) => {
    setSelectedLanguage(newLanguage);
    setSelectedFlag(flag);
  };

  return (
    <Sheet>
      <SheetTrigger>
        <TooltipProvider delayDuration={1}>
          <Tooltip open={tooltipVisible}>
            <TooltipTrigger
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 w-9 rounded-[6px] border-border ml-5 shadow-sm hover:bg-foreground '
            >
              <CountryFlag
                flagCode={selectedFlag}
                className='m-0'
                width={24}
                height={24}
              />
            </TooltipTrigger>

            <TooltipContent>
              <p className='text-xs font-medium'>{selectedLanguage}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SheetTrigger>

      <SheetContent side='bottom'>
        <div className='max-w-3xl mx-auto  flex flex-col justify-center h-full '>
          <SheetHeader>
            <SheetTitle className='font-semibold text-2xl text-left text-text pb-1'>
              Select Languages
            </SheetTitle>
          </SheetHeader>

          <div className='grid grid-cols-3 sm:grid-cols-6 gap-4'>
            {LANGUAGES.map((lang) => (
              <LanguageButton
                key={lang.name}
                name={lang.name}
                flag={lang.flag}
                isSelected={selectedLanguage === lang.name}
                onClick={() => handleLanguageChange(lang.name, lang.flag)}
              />
            ))}
          </div>
        </div>

        <SheetClose className='absolute top-4 right-5 p-2 border dark:border-white rounded-full cursor-pointer hover:opacity-100 opacity-50'>
          <X />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Languages;
