import React from "react";
import tailwind from "../assets/tailwind";
import Logo from "../components/Logo";
import SocialLinks from "../components/SocialLinks";

const Header = () => {
  return (
    <header className={tailwind.header.container}>
      <Logo />
      <SocialLinks />
    </header>
  );
};

export default Header;
