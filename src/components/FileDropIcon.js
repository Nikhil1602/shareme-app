import React, { useState } from "react";
import FILE from "../assets/images/file.svg";
import tailwind from "../assets/tailwind";
import { useDrag } from "../hooks";

const FileDropIcon = ({ FileRef, upload, setLink }) => {
  const { image, file_input, file_section, title, browse } = tailwind.main_body;
  const left = "translate-x-[20px] rotate-[10deg] grayscale-[50]";
  const center = "translate-y-[-5px] z-10";
  const right = "rotate-[-10deg] translate-x-[-20px] grayscale-[50]";

  const [drag, setDrag, unsetDrag] = useDrag();

  const handleDrop = (e) => {
    e.preventDefault();
    unsetDrag();
    setLink("");
    const files = e.dataTransfer.files;
    if (files.length) {
      FileRef.current.files = files;
      upload();
    }
  };

  const handleClick = () => {
    setLink("");
    FileRef.current.click();
  };

  const handleChange = (e) => {
    e.preventDefault();
    upload();
  };

  return (
    <figure
      onDragOver={setDrag}
      onDragLeave={unsetDrag}
      onDrop={handleDrop}
      className={file_section(drag)}>
      <input
        type="file"
        ref={FileRef}
        className={file_input}
        onChange={handleChange}
      />
      <img src={FILE} className={image(drag, left)} draggable={false} />
      <img src={FILE} className={image(drag, center)} draggable={false} />
      <img src={FILE} className={image(drag, right)} draggable={false} />
      <div className={title}>
        Drop your file here or,{" "}
        <span onClick={handleClick} className={browse}>
          browse
        </span>
      </div>
    </figure>
  );
};

export default FileDropIcon;
