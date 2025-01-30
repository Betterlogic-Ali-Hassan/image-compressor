"use client";
import type React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Paintbrush, X } from "lucide-react";
import { LanguageButton } from "./LanguageButton";
import { LANGUAGES } from "@/constant/SettingsData";
import { useSettings } from "@/context/SettingContext";

const DropDown: React.FC = () => {
  const { toggled, setToggled, selectedLanguage, setSelectedLanguage } =
    useSettings();

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='h-9 w-9 rounded-[6px] border-border ml-5 shadow-sm hover:bg-foreground'
        >
          <Paintbrush size={20} />
        </Button>
      </SheetTrigger>

      <SheetContent side='bottom'>
        <div className='max-w-3xl mx-auto my-4 md:my-12 '>
          <SheetHeader>
            <SheetTitle className='font-semibold text-xl text-left text-text'>
              Settings
            </SheetTitle>
          </SheetHeader>

          <div className='flex items-center justify-between gap-2 mt-5 '>
            <div>
              <h2 className='mb-2 font-semibold text-left text-lg'>
                Customize
              </h2>
              <SheetDescription className='text-[#666]'>
                Pick a style and color for your components.
              </SheetDescription>
            </div>
            <Switch
              checked={toggled}
              onCheckedChange={() => setToggled(!toggled)}
            />
          </div>
          <div className='divider div-transparent mt-8' />
          <div>
            <h2 className='my-5 font-semibold text-left text-lg'>Languages</h2>
            <div className='grid grid-cols-3 sm:grid-cols-6 gap-4'>
              {LANGUAGES.map((lang) => (
                <LanguageButton
                  key={lang.name}
                  name={lang.name}
                  flag={lang.flag}
                  isSelected={selectedLanguage === lang.name}
                  onClick={() => handleLanguageChange(lang.name)}
                />
              ))}
            </div>
          </div>
        </div>
        <SheetClose className='absolute top-4 right-5 p-2 border dark:border-white rounded-full cursor-pointer hover:opacity-100 opacity-50'>
          <X />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default DropDown;
