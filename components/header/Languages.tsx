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
import { Button } from "@/components/ui/button";

import { X } from "lucide-react";
import { LanguageButton } from "./LanguageButton";
import { LANGUAGES } from "@/constant/SettingsData";
import { useSettings } from "@/context/SettingContext";
import { CountryFlag } from "../CountriesFlags";
import { useState } from "react";

const Languages: React.FC = () => {
  const { selectedLanguage, setSelectedLanguage } = useSettings();
  const [selectedFlag, setSelectedFlag] = useState("gb");

  const handleLanguageChange = (newLanguage: string, flag: string) => {
    setSelectedLanguage(newLanguage);
    setSelectedFlag(flag);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='h-9 w-9 rounded-[6px] border-border ml-5 shadow-sm hover:bg-foreground '
        >
          <CountryFlag
            flagCode={selectedFlag}
            className='m-0'
            width={24}
            height={24}
          />
        </Button>
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
