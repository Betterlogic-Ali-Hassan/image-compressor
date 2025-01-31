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

import { Loader2, X } from "lucide-react";
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
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Languages: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  const [open, setOpen] = useState(false);
  const { selectedLanguage, setSelectedLanguage } = useSettings();
  const [tempSelectedLanguage, setTempSelectedLanguage] =
    useState(selectedLanguage);
  const [selectedFlag, setSelectedFlag] = useState("gb");
  const [tempSelectedFlag, setTempSelectedFlag] = useState(selectedFlag);
  const [isSaving, setIsSaving] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  const handleLanguageChange = (newLanguage: string, flag: string) => {
    setTempSelectedLanguage(newLanguage);
    setTempSelectedFlag(flag);
    setIsChanged(true);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setSelectedLanguage(tempSelectedLanguage);
      setSelectedFlag(tempSelectedFlag);
      setIsSaving(false);
      setOpen(false);
      setIsChanged(false);
      document.body.click();
    }, 2000);
  };

  const handleClose = () => {
    setTempSelectedLanguage(selectedLanguage);
    setTempSelectedFlag(selectedFlag);
    setOpen(false);
    setIsChanged(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <TooltipProvider delayDuration={1}>
          <Tooltip open={tooltipVisible}>
            <TooltipTrigger
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-9 w-9 rounded-[6px] border-border ml-5 shadow-sm hover:bg-foreground'
            >
              <CountryFlag
                flagCode={selectedFlag}
                className='m-0'
                width={24}
                height={24}
              />
            </TooltipTrigger>
            <TooltipContent className='tooltip relative'>
              <p className='text-xs font-medium'>{selectedLanguage}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SheetTrigger>

      <SheetContent side='bottom'>
        <div className='max-w-3xl mx-auto flex flex-col justify-center h-full'>
          <SheetHeader>
            <SheetTitle className='font-bold text-2xl text-text pb-1'>
              Select Languages
            </SheetTitle>
          </SheetHeader>

          <div className='grid grid-cols-3 sm:grid-cols-6 gap-6'>
            {LANGUAGES.map((lang) => (
              <LanguageButton
                key={lang.name}
                name={lang.name}
                flag={lang.flag}
                isSelected={tempSelectedLanguage === lang.name}
                onClick={() => handleLanguageChange(lang.name, lang.flag)}
              />
            ))}
          </div>

          {isChanged && (
            <div className='flex items-center justify-center gap-4 mt-6'>
              <Button
                variant='outline'
                className='flex items-center gap-2.5 rounded-[6px] border-border hover:bg-foreground px-6 h-[40px]'
                onClick={handleClose}
              >
                Close
              </Button>

              <Button
                className={cn(
                  "flex items-center bg-text text-background hover:bg-black/80 dark:hover:bg-white/80 rounded-[6px] border-border px-6 h-[40px]",
                  isSaving && "px-2"
                )}
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? (
                  <>
                    <Loader2 className='animate-spin' size={20} /> Saving...{" "}
                  </>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          )}
        </div>

        <SheetClose className='absolute top-4 right-5 p-2 border dark:border-white rounded-full cursor-pointer hover:opacity-100 opacity-50'>
          <X />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default Languages;
