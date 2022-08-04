import React from "react";
import INSTAGRAM from "../assets/icons/instagram.png";
import LINKEDIN from "../assets/icons/linkedin.png";
import GITHUB from "../assets/icons/github.png";
import tailwind from "../assets/tailwind";

const SocialLinks = () => {
  const { social_outer, social_inner, icons } = tailwind.header;
  const GITHUB_LINK = "https://github.com/Nikhil1602";
  const INSTA_LINK = "https://www.instagram.com/nik5257/";
  const LINKEDIN_LINK = "https://www.linkedin.com/in/nikhil-barot-508968223/";

  return (
    <hgroup className={social_outer}>
      <aside className={social_inner}>
        <a href={GITHUB_LINK} target="_blank">
          <img className={icons("top-[40%]")} src={GITHUB} alt="github" />
        </a>
        <a href={INSTA_LINK} target="_blank">
          <img className={icons("top-[50%]")} src={INSTAGRAM} alt="instagram" />
        </a>
        <a href={LINKEDIN_LINK} target="_blank">
          <img className={icons("top-[60%]")} src={LINKEDIN} alt="linkedin" />
        </a>
      </aside>
    </hgroup>
  );
};

export default SocialLinks;
