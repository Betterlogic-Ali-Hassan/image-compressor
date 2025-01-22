"use client";
import React from "react";
import { Button } from "../ui/button";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button
      variant='outline'
      size='icon'
      className='h-8 w-8 rounded-[6px] ml-5 shadow-sm hover:bg-foreground'
      onClick={toggleTheme}
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </Button>
  );
};

export default ThemeToggle;
