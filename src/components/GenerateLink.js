import React from "react";
import COPY from "../assets/icons/copy_icon.svg";
import tailwind from "../assets/tailwind";

const GenerateLink = ({ LinkRef, url, copyLink }) => {
  const { link_container, expires, link_inner, link, copy_icon } =
    tailwind.main_body;

  return (
    <div className={link_container(url === "")}>
      <p className={expires}>Link expires in 24 hrs</p>
      <div className={link_inner}>
        <input
          type="text"
          id="fileURL"
          ref={LinkRef}
          readOnly={true}
          className={link}
          value={url}
        />
        <img
          src={COPY}
          className={copy_icon}
          alt="copy-icon"
          onClick={copyLink}
        />
      </div>
    </div>
  );
};

export default GenerateLink;
