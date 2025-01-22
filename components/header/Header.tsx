import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-white dark:bg-[#000c] head-shadow border-b border-border  h-[70px] w-full px-8 fixed top-0'>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
