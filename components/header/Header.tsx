import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-white dark:bg-[#000] border-b-2  shadow-none border-border z-50  h-[70px] w-full px-8 fixed top-0'>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
