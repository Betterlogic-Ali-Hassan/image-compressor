import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";
import MobileHeader from "./MobileHeader";

import AddtoChromeBtn from "./AddtoChromeBtn";
import Setting from "./Setting";

const Header = () => {
  return (
    <header className=' bg-white dark:bg-[#000]  border-b-2 flex items-center justify-between px-10 shadow-none border-border z-50  h-[88px] w-full  '>
      <div className='flex items-center gap-6'>
        <Logo />
        <Nav />
      </div>
      <div className='flex items-center'>
        <Setting />
        <ThemeToggle />
        <MobileHeader />
        <AddtoChromeBtn className='max-md:hidden' />
      </div>
    </header>
  );
};

export default Header;
