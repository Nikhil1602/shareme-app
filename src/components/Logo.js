import React from "react";
import LOGO from "../assets/icons/logo.png";
import tailwind from "../assets/tailwind";

const Logo = () => {
  const { logo_container, logo, logo_title1, logo_title2 } = tailwind.header;

  return (
    <hgroup className={logo_container}>
      <img src={LOGO} className={logo} alt="logo" />
      <h1 className={logo_title1}>
        Share<span className={logo_title2}>Me</span>
      </h1>
    </hgroup>
  );
};

export default Logo;
