import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";
import MobileHeader from "./MobileHeader";

import AddtoChromeBtn from "./AddtoChromeBtn";

const Header = () => {
  return (
    <header className=' bg-white dark:bg-[#000]  border-b-2  shadow-none border-border z-50  h-[88px] w-full  fixed top-0'>
      <div className='container flex items-center  !pb-0 h-full  justify-between'>
        <div className='flex items-center gap-6'>
          <Logo />
          <Nav />
        </div>
        <div className='flex items-center'>
          <ThemeToggle />
          <MobileHeader />
          <AddtoChromeBtn className='max-md:hidden' />
        </div>
      </div>
    </header>
  );
};

export default Header;
