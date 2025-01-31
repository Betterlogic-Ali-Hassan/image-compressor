"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const ThemeToggle = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <TooltipProvider delayDuration={1}>
      <Tooltip open={tooltipVisible}>
        <TooltipTrigger
          asChild
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button
            variant='outline'
            size='icon'
            className='h-9 w-9 rounded-[6px] border-border ml-5 shadow-sm hover:bg-foreground'
            onClick={toggleTheme}
          >
            {theme === "dark" ? <FiSun size={19} /> : <FiMoon size={19} />}
          </Button>
        </TooltipTrigger>

        <TooltipContent className='tooltip relative'>
          <p className='text-xs font-medium capitalize'>{theme}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
