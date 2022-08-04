import React, { useRef, useState } from "react";
import BANNER from "../assets/images/banner.png";
import FILE from "../assets/images/file.svg";
import COPY from "../assets/icons/copy_icon.svg";
import { DataInput } from "../components";
import tailwind from "../assets/tailwind";

const MainBody = () => {
  const { container, section1, section2, icon } = tailwind.main_body;

  return (
    <section className={container}>
      <div className={section1}>
        <DataInput />
      </div>
      <div className={section2}>
        <img className={icon} src={BANNER} alt="banner" draggable={false} />
      </div>
    </section>
  );
};

export default MainBody;
